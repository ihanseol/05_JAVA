//file: DynamicHookupTest.java
import javax.swing.*;
import java.awt.event.*;

public class DynamicHookupTest extends JFrame {
  DynamicActionAdapter actionAdapter = new DynamicActionAdapter(  );
  JLabel label = new JLabel( "Ready...", JLabel.CENTER );
  int count;

  public DynamicHookupTest(  ) {
    JButton launchButton = new JButton("Launch!");
    getContentPane(  ).add( launchButton, "South" );
    getContentPane(  ).add( label, "Center" );
    actionAdapter.hookup(launchButton, this, "launchTheMissiles");
  }

  public void launchTheMissiles(  ) {
    label.setText("Launched: "+ count++ );
  }

  public static void main(String[] args) {
    JFrame f = new DynamicHookupTest(  );
    f.addWindowListener(new WindowAdapter(  ) {
      public void windowClosing(WindowEvent we) { System.exit(0); }
    });
    f.setSize(150, 150);
    f.setVisible( true );
  }
}
