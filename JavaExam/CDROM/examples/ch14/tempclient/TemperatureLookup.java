import temp.*;

class TemperatureLookup {
    public static void main( String [] args ) throws Exception
    {
        TemperatureService impl = new TemperatureService_Impl();
        TemperaturePortType port = impl.getTemperaturePort();
        float temp = port.getTemp("63112");
		System.out.println( "Temperature = "+temp );
    }
}

