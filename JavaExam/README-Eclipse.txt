This package contains the Learning Java 3rd edition example code bundled as an
Eclipse 3.x project.  This archive does not contain a "root" directory so as to
make it possible to import using the Import->From Archive function in Eclipse.

The primary differences are the addition of the following files:

  .classpath  - Tells eclipse that each chapter directory is a source dir
  .project    - Project info

Some files have been moved to appropriate packages where they otherwise
might have been left in the root directory for easier browsing.

Eclipse will show "Problems" on ch08, ch14, and ch21. These are as follows:

  ch08 - This is a bug in Eclipse's generics parsing.  The examples compiles 
         and runs under Java 5.0 javac
  ch21 - The MediaPlayer class requires you to install the Java Media Framework
         (JMF) and add the jmf.jar to your build path.
  ch24 - The JAXB tests require classes generated by JAXB.

The following chapters have Ant build files which can be run from within Eclipse
using the "Run as -> Ant Project" menu option.  All of these build.xml files 
include a 'clean' target which will remove all compiled classes and generated 
files.

  ch14/tempclient	- builds the web service client example application.
  ch15/webapp 		- builds the learningjava.war web application. 
  ch15/webservice 	- builds the example web service for Tomcat. 
  ch22/magicbeans   - builds the Java Beans examples
  ch23/             - builds the sign applet jar, requires keys be created first
                      See the text and createkeys.sh
  ch24/             - contains a 'jaxb' target which will generate the model
                      classes from the schema.  This build requires the JWSDP.
       
Note: ch15/webapp, ch15/webservice, and ch24 require the Java Web Services 
Developer Pack (JWSDP) to be installed first.  You must edit the build.xml
file to set the jwsdphome property indicating the JWSDP install directory.

