import org.jdom.*;
import org.jdom.input.*;
import org.jdom.output.*;
import java.util.*;

public class TestJDOM {
	public static void main( String[] args ) throws Exception {
		Document doc = new SAXBuilder().build("zooinventory.xml");
		List animals = doc.getRootElement().getChildren("Animal");
		System.out.println("Animals = ");
		for( int i=0; i<animals.size(); i++ ) {
			String name = ((Element)animals.get(i)).getChildText("Name");
			String species = ((Element)animals.get(i)).getChildText("Species");
			System.out.println( "  "+ name +" ("+species+")" );
		}
		Element foodRecipe = ((Element)animals.get(1)).getChild("FoodRecipe");
		String name = foodRecipe.getChildText("Name");
		System.out.println("Recipe = " + name );
		List ingredients = foodRecipe.getChildren("Ingredient");
		for(int i=0; i<ingredients.size(); i++) 
			System.out.println( "  "+((Element)ingredients.get(i)).getText() );
	}
}
