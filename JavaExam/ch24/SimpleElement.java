
public class SimpleElement {
	StringBuffer text = new StringBuffer();
	public void addText( String s ) { text.append( s ); }
	public String getText() { return text.toString(); }
	public void setAttributeValue( String name, String value ) { 
		throw new Error( getClass()+": No attributes allowed");
	}
}
