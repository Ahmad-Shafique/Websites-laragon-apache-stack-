<!DOCTYPE html>




    
<html>
    <head>
        <title>Improved TODO </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="w3.css">
        <link rel="stylesheet" href="todocss.css">

        <script type="text/javascript" src="todoScripts.js">
            var obj = {mainactivity:"",subactivity:[]};
        </script>    
    </head>
    
    <body>
        <div name="add_activity" > 
            <input type="text" name="mainactivity" class="mainactivity"><br>
            <input type="text" name="subactivity1" class="subactivity"><br>
            <input type="text" name="subactivity2" class="subactivity"><br>
            <input type="text" name="subactivity3" class="subactivity"><br>
            <input type="submit" value="Add" name="AddButton" class="addbutton" onclick="redirecttest()"> 
        </div>

            <br><br><br><br>
            
        <div id="activities">
            
        </div>
        
    </body>
    
    <script>
        function redirecttest(){
            //addFunction();
            addActivityNode();
            
            
            //alert(obj.toSource());
            //alert(JSON.stringify(YOUR_OBJECT_HERE, null, 4));
            
            
            //alert(obj.mainactivity);
            //alert(obj.subactivity[0]);
            
        }
    </script>
    
    
    
    
</html>