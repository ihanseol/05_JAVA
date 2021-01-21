import javax.xml.transform.*;
import javax.xml.transform.stream.*;

public class XSLTransform 
{
	public static void main( String [] args ) throws Exception
	{
		if ( args.length < 2 || !args[0].endsWith(".xsl") ) {
			System.err.println("usage: XSLTransform file.xsl file.xml");
			System.exit(1);
		}
		TransformerFactory factory = TransformerFactory.newInstance();
		Transformer transformer = 
			factory.newTransformer( new StreamSource( args[0] ) );
		StreamSource xmlsource = new StreamSource( args[1] );
		StreamResult output = new StreamResult( System.out );
		transformer.transform( xmlsource, output );
	}
}


