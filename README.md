storyline-character-input
=========================

Using [yo angular template](https://github.com/yeoman/generator-angular).


Helps
=====
Grunt instructions :
-------------------



Yeoman generators :
-------------------
All generators updates the index.html to includes new javascript and generate the karma file associated to the functionality.

+ Route

        yo angular:route myroute [--uri=my/uri]

    Updates:
    
        app/scripts/app.js
        
    Produces :
    
        app/scripts/controllers/myroute.js
        
        app/views/myroute.html

+ Controller
        
        yo angular:controller mycontroller
        
    Produces :
        
        app/scripts/controllers/mycontroller.js
        
+ Directive
        
        yo angular:directive mydirective
        
    Produces :
        
        app/scripts/directives/mydirective.js
        
+ Filter

        yo angular:filter myfilter
        
    Produces :
    
        app/scripts/filters/myfilter.js
        
+ View

        yo angular:view myview
        
    Produces :
    
        app/views/myview.html
        
+ Service / Provider / Factory / Value / Constant

        yo angular:service myservice
        
    Produces :
    
        app/scripts/services/myservice.js
        
+ Decorator

        yo angular:decorator servicename
        
    Produces :
    
        app/scripts/decorators/servicenameDecorator.js