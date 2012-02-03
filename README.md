#LocationHash 
 
 Location is a small library for get/set/delete the URL HASH parameters

#Use
 Example - We have our URL = http://example.com/NewPage#tab=Setting&module=Accounts
 get hash parameter

        Location.getParam(key); 
        // This will return value of key 
        //Ex 
        var a = Location.getParam("tab"); 
        //a = "Setting";
        
 set hash parameter

        Location.setParam(key, val); 
        // This will return set key/val parameter 
        //Ex 
        Location.setParam("dept","Maths");
        //URL will become http://example.com/NewPage#tab=Setting&module=Accounts&dept=Maths
        
 delete hash parameter
 
        Location.deleteParam(key); 
        // This will return set key/val parameter 
        //Ex 
        Location.deleteParam("tab");
        Location.deleteParam("module");
        //URL will become http://example.com/NewPage#dept=Maths

#Demo
  

#CopyRight and License

 (c)2012, Narendra Sisodiya narendra@narendrasisodiya.com,

 Released under MIT License


