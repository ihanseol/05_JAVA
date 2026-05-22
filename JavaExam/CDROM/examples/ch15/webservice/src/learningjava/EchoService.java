package learningjava;

public interface EchoService extends java.rmi.Remote 
{
    public int echoInt( int value ) 
		throws java.rmi.RemoteException;
    public String echoString( String value ) 
		throws java.rmi.RemoteException;
    public MyObject echoMyObject( MyObject value) 
		throws java.rmi.RemoteException;
}
