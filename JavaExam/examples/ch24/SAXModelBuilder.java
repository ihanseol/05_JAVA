import org.xml.sax.*;
import org.xml.sax.helpers.*;
import java.util.*;
import java.lang.reflect.*;

public class SAXModelBuilder extends DefaultHandler
{
    Stack<SimpleElement> stack = new Stack<SimpleElement>();
	SimpleElement element;

    public void startElement(
        String namespace, String localname, String qname, Attributes atts ) 
		throws SAXException
	{
		SimpleElement element = null;
        try {
            element = (SimpleElement)Class.forName(qname).newInstance();
        } catch ( Exception e ) { }
        if ( element == null ) 
			element = new SimpleElement();
		for(int i=0; i<atts.getLength(); i++)
			element.setAttributeValue( atts.getQName(i), atts.getValue(i) );
        stack.push( element );
    }

	public void endElement( String namespace, String localname, String qname ) 
		throws SAXException
	{
		element = stack.pop();
		if ( !stack.empty() )
			try {
				setProperty( qname, stack.peek(), element );
			} catch ( Exception e ) { throw new SAXException( "Error: "+e ); }
	}

	public void characters(char[] ch, int start, int len ) {
		String text = new String( ch, start, len );
		stack.peek().addText( text );
	}

    void setProperty( String name, Object target, Object value ) 
		throws SAXException 
	{
		Method method = null;
		try { 
			method = target.getClass().getMethod("add"+name, value.getClass());
		} catch ( NoSuchMethodException e ) { }
		if ( method == null ) try { 
			method = target.getClass().getMethod("set"+name, value.getClass());
		} catch ( NoSuchMethodException e ) { }
		if ( method == null ) try { 
			value = ((SimpleElement)value).getText();
			method = target.getClass().getMethod( "add"+name, String.class );
		} catch ( NoSuchMethodException e ) { }
		try {
			if ( method == null )
				method = target.getClass().getMethod("set"+name, String.class);
			method.invoke( target, value );
		} catch ( Exception e ) { throw new SAXException( e.toString() ); }
	}

	public SimpleElement getModel() { return element; }
}

