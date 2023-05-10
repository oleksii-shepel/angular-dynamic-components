# Angular plugable components

This solution shows how to use components from shared libraries without the need for direct import of these libraries. The concept assumes that the shared functionality of the library is placed in the plugins section from which it is available for use. Thus, the direct reference to the library is substituted with reference to its plugins and the problem with circular references between libraries is solved. 
