import javax.xml.bind.*;
import learningjava.ObjectFactory;
import learningjava.Inventory;
import learningjava.Animal;
import java.io.File;
import java.util.*;

public class TestJAXBMarshall
{

	public static void main( String [] args ) throws JAXBException
	{
		ObjectFactory factory = new ObjectFactory();

		Inventory inventory = factory.createInventory();
		Animal fang = factory.createAnimal();
		fang.setName("Song Fang");
		fang.setSpecies("Giant Panda");
		fang.setHabitat("China");
		fang.setFood("Bamboo");
		fang.setTemperament("Friendly");
		fang.setWeight(45.0);
		inventory.getAnimal().add( fang );

		JAXBContext jbcontext = JAXBContext.newInstance("learningjava");
		Marshaller marshaller = jbcontext.createMarshaller();
		marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
		marshaller.marshal( inventory, System.out );
	}
}
