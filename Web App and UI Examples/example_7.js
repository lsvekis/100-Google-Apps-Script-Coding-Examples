<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <button id="clickBtn">Click me</button>
    <div id="output"></div>
    <script>
      $(document).ready(function(){
        $("#clickBtn").click(function(){
          $("#output").html("Button clicked!");
        });
      });
    </script>
  </body>
</html>

