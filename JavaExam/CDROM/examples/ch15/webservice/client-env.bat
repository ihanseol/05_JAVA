::set JWSDP_HOME=

echo off

set classpath=
set classpath=%classpath%;%JWSDP_HOME%\jaxrpc\lib\jaxrpc-api.jar
set classpath=%classpath%;%JWSDP_HOME%\jaxrpc\lib\jaxrpc-impl.jar
set classpath=%classpath%;%JWSDP_HOME%\jaxrpc\lib\jaxrpc-spi.jar
set classpath=%classpath%;%JWSDP_HOME%\jwsdp-shared\lib\jax-qname.jar
set classpath=%classpath%;%JWSDP_HOME%\jwsdp-shared\lib\relaxngDatatype.jar
set classpath=%classpath%;%JWSDP_HOME%\jwsdp-shared\lib\activation.jar
set classpath=%classpath%;%JWSDP_HOME%\jwsdp-shared\lib\mail.jar
set classpath=%classpath%;%JWSDP_HOME%\saaj\lib\saaj-api.jar
set classpath=%classpath%;%JWSDP_HOME%\saaj\lib\saaj-impl.jar
set classpath=%classpath%;%JWSDP_HOME%\jaxp\lib\endorsed\dom.jar
set classpath=%classpath%;%JWSDP_HOME%\jaxp\lib\endorsed\sax.jar
set classpath=%classpath%;%JWSDP_HOME%\jaxp\lib\endorsed\xercesImpl.jar
set classpath=%classpath%;.
