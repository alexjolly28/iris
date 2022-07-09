
    var config = {
    apiKey: "AIzaSyDHoP-Dfb1Nnb4BdqXWZI9TmjYfTfoprFc",
    authDomain: "iris-687c2.firebaseapp.com",
    databaseURL: "https://iris-687c2.firebaseio.com",
    projectId: "iris-687c2",
    storageBucket: "iris-687c2.appspot.com",
    messagingSenderId: "121800452211"
  };
  // Initialize Firebase
  var appname=firebase.initializeApp(config);
    console.log(appname)
    var database=firebase.database();
$('#iot-1').click(
                function(){
                     console.log("clicked")
                    obj_off={r1:0};
                    obj_on={r1:1};
                    ref=database.ref('/')
                    database.ref('/').once('value').then((snapshot)=>{
                        if(snapshot.val().r1==1){
                            ref.update(obj_off);
                        }
                        else 
                        {
                            ref.update(obj_on);
                        }
                    })
                }
                );
$('#iot-2').click(
                    function(){
                        // console.log("clicked")
                        obj_off={r2:0};
                        obj_on={r2:1};
                        ref=database.ref('/')
                        database.ref('/').once('value').then((snapshot)=>{
                            if(snapshot.val().r2==1){
                                ref.update(obj_off);
                            }
                            else 
                            {
                                ref.update(obj_on);
                            }
                        })
                    }
                );
                $('#iot-3').click(
                    function(){
                        // console.log("clicked")
                        obj_off={r3:0};
                        obj_on={r3:1};
                        ref=database.ref('/')
                        database.ref('/').once('value').then((snapshot)=>{
                            if(snapshot.val().r3==1){
                                ref.update(obj_off);
                            }
                            else 
                            {
                                ref.update(obj_on);
                            }
                        })
                    }
                );
                $('#iot-4').click(
                    function(){
                        // console.log("clicked")
                        obj_off={r4:0};
                        obj_on={r4:1};
                        ref=database.ref('/')
                        database.ref('/').once('value').then((snapshot)=>{
                            if(snapshot.val().r4==1){
                                ref.update(obj_off);
                            }
                            else 
                            {
                                ref.update(obj_on);
                            }

                        })
                    }
                );
                $('#iot-5').click(
                    function(){
                        // console.log("clicked")
                        obj_off={r5:0};
                        obj_on={r5:1};
                        ref=database.ref('/')
                        database.ref('/').once('value').then((snapshot)=>{
                            if(snapshot.val().r5==1){
                                ref.update(obj_off);
                            }
                            else 
                            {
                                ref.update(obj_on);
                            }
                        })
                    }
                );
                $('#iot-6').click(
                    function(){
                        // console.log("clicked")
                        obj_off={r6:0};
                        obj_on={r6:1};
                        ref=database.ref('/')
                        database.ref('/').once('value').then((snapshot)=>{
                            if(snapshot.val().r6==1){
                                ref.update(obj_off);
                            }
                            else 
                            {
                                ref.update(obj_on);
                            }
                        })
                    }
                );

	    setInterval(function(){
		database.ref('/').once('value').then((snapshot)=>{
		console.log(snapshot.val());
        $('#main').text("Hello "+snapshot.val().name);
        $('#emotion').html(snapshot.val().emotion);
            if(snapshot.val().r1==1){
                $('#iot-1 .fas').css("color","yellow");
            }
            else 
            {
                $('#iot-1 .fas').css("color","white");
            }
            if(snapshot.val().r2==1){
                $('#iot-2 .fas').css("color","yellow");
            }
            else 
            {
                $('#iot-2 .fas').css("color","white");
            }
            if(snapshot.val().r3==1){
                $('#iot-3 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-3 .far').css("color","white");
            }
            if(snapshot.val().r4==1){
                $('#iot-4 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-4 .far').css("color","white");
            }
            if(snapshot.val().r5==1){
                $('#iot-5 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-5 .far').css("color","white");
            }
            if(snapshot.val().r6==1){
                $('#iot-6 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-6 .far').css("color","white");
            }
		})},
		3000);

            
/*
                

    setInterval(()=>{
        database.ref('/').once('value').then((snapshot)=>{
            $('#name').html(snapshot.val().name);
            $('#emotion').html(snapshot.val().emotion);

        })

        database.ref('/').once('value').then((snapshot)=>{
            if(snapshot.val().r1==1){
                $('#iot-1 .fas').css("color","yellow");
            }
            else 
            {
                $('#iot-1 .fas').css("color","white");
            }
            if(snapshot.val().r2==1){
                $('#iot-2 .fas').css("color","yellow");
            }
            else 
            {
                $('#iot-2 .fas').css("color","white");
            }
            if(snapshot.val().r3==1){
                $('#iot-3 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-3 .far').css("color","white");
            }
            if(snapshot.val().r4==1){
                $('#iot-4 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-4 .far').css("color","white");
            }
            if(snapshot.val().r5==1){
                $('#iot-5 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-5 .far').css("color","white");
            }
            if(snapshot.val().r6==1){
                $('#iot-6 .far').css("color","yellow");
            }
            else 
            {
                $('#iot-6 .far').css("color","white");
            }
    },500)*/

