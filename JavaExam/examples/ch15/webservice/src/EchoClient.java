import learningjava.impl.*;

public class EchoClient 
{
	public static void main( String [] args ) throws java.rmi.RemoteException
	{
		Echo_Impl impl = new Echo_Impl();
		EchoService service = impl.getEchoServicePort();

		int i = service.echoInt( 42 );
		System.out.println( i == 42 );
		String s = service.echoString( "Hello!" );
		System.out.println( s.equals("Hello!") );
		MyObject myObj = service.echoMyObject( new MyObject(42, "Foo!") );
		System.out.println( myObj.getClass() );
		System.out.println( myObj.getStringValue() );
	}
}
