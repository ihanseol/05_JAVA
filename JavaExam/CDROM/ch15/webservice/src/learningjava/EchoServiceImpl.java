package learningjava;

public class EchoServiceImpl implements EchoService 
{
    public int echoInt( int value ) { return value; }
    public String echoString( String value ) { return value; }
    public MyObject echoMyObject( MyObject value ) { 
System.out.println( value.getClass() );
	return value; }
}

