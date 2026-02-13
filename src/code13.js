gdjs.loginCode = {};
gdjs.loginCode.localVariables = [];
gdjs.loginCode.idToCallbackMap = new Map();
gdjs.loginCode.GDtitleObjects1= [];
gdjs.loginCode.GDtitleObjects2= [];
gdjs.loginCode.GDusernameObjects1= [];
gdjs.loginCode.GDusernameObjects2= [];
gdjs.loginCode.GDpasswordObjects1= [];
gdjs.loginCode.GDpasswordObjects2= [];
gdjs.loginCode.GDlogin_9595buttonObjects1= [];
gdjs.loginCode.GDlogin_9595buttonObjects2= [];
gdjs.loginCode.GDExitObjects1= [];
gdjs.loginCode.GDExitObjects2= [];
gdjs.loginCode.GDlogininfotextObjects1= [];
gdjs.loginCode.GDlogininfotextObjects2= [];


gdjs.loginCode.userFunc0xc6bf68 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
fetch("https://games.lncvrt.xyz/api/account/login")
objects[]
};
gdjs.loginCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.loginCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loginCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.loginCode.GDExitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.loginCode.GDExitObjects1[k] = gdjs.loginCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.loginCode.GDExitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title official", false);
}
elseEventsChainSatisfied = true;
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("login_button"), gdjs.loginCode.GDlogin_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loginCode.GDlogin_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.loginCode.GDlogin_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.loginCode.GDlogin_9595buttonObjects1[k] = gdjs.loginCode.GDlogin_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.loginCode.GDlogin_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.loginCode.GDtitleObjects1);

const objects = gdjs.loginCode.GDtitleObjects1;
gdjs.loginCode.userFunc0xc6bf68(runtimeScene, objects);

}


};

gdjs.loginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loginCode.GDtitleObjects1.length = 0;
gdjs.loginCode.GDtitleObjects2.length = 0;
gdjs.loginCode.GDusernameObjects1.length = 0;
gdjs.loginCode.GDusernameObjects2.length = 0;
gdjs.loginCode.GDpasswordObjects1.length = 0;
gdjs.loginCode.GDpasswordObjects2.length = 0;
gdjs.loginCode.GDlogin_9595buttonObjects1.length = 0;
gdjs.loginCode.GDlogin_9595buttonObjects2.length = 0;
gdjs.loginCode.GDExitObjects1.length = 0;
gdjs.loginCode.GDExitObjects2.length = 0;
gdjs.loginCode.GDlogininfotextObjects1.length = 0;
gdjs.loginCode.GDlogininfotextObjects2.length = 0;

gdjs.loginCode.eventsList0(runtimeScene);
gdjs.loginCode.GDtitleObjects1.length = 0;
gdjs.loginCode.GDtitleObjects2.length = 0;
gdjs.loginCode.GDusernameObjects1.length = 0;
gdjs.loginCode.GDusernameObjects2.length = 0;
gdjs.loginCode.GDpasswordObjects1.length = 0;
gdjs.loginCode.GDpasswordObjects2.length = 0;
gdjs.loginCode.GDlogin_9595buttonObjects1.length = 0;
gdjs.loginCode.GDlogin_9595buttonObjects2.length = 0;
gdjs.loginCode.GDExitObjects1.length = 0;
gdjs.loginCode.GDExitObjects2.length = 0;
gdjs.loginCode.GDlogininfotextObjects1.length = 0;
gdjs.loginCode.GDlogininfotextObjects2.length = 0;


return;

}

gdjs['loginCode'] = gdjs.loginCode;
