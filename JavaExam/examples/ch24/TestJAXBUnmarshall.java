import javax.xml.bind.*;
import learningjava.*;
import java.io.File;
import java.util.*;

public class TestJAXBUnmarshall
{

	public static void main( String [] args ) throws JAXBException
	{
		JAXBContext jbcontext = JAXBContext.newInstance("learningjava");
		Unmarshaller unmarshaller = jbcontext.createUnmarshaller();
		// unmarshaller.setValidating(true);

		InventoryType inventory = (InventoryType)unmarshaller.unmarshal( 
			new File("zooinventory.xml") );

		System.out.println( "Animals = " );
		List<AnimalType> animals = inventory.getAnimal();
		for( AnimalType animal : animals )
			System.out.println( "\t"+animal.getName() );
		AnimalType cocoa = (AnimalType)(inventory.getAnimal().get(1));
		FoodRecipeType recipe = cocoa.getFoodRecipe();
		System.out.println( "Recipe = " + recipe.getName() );
		List<String> ingredients = recipe.getIngredient();
		for( String ingredient : ingredients )
			System.out.println( "\t"+ingredient );
	}

}
