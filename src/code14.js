gdjs.loggedInCode = {};
gdjs.loggedInCode.localVariables = [];
gdjs.loggedInCode.idToCallbackMap = new Map();
gdjs.loggedInCode.GDtitleTextObjects1= [];
gdjs.loggedInCode.GDtitleTextObjects2= [];
gdjs.loggedInCode.GDlogin_9595buttonObjects1= [];
gdjs.loggedInCode.GDlogin_9595buttonObjects2= [];
gdjs.loggedInCode.GDexitButtonObjects1= [];
gdjs.loggedInCode.GDexitButtonObjects2= [];
gdjs.loggedInCode.GDDefault_9595TransparentPanel_959515Objects1= [];
gdjs.loggedInCode.GDDefault_9595TransparentPanel_959515Objects2= [];
gdjs.loggedInCode.GDlogoutButtonObjects1= [];
gdjs.loggedInCode.GDlogoutButtonObjects2= [];
gdjs.loggedInCode.GDsaveButtonObjects1= [];
gdjs.loggedInCode.GDsaveButtonObjects2= [];
gdjs.loggedInCode.GDloadButtonObjects1= [];
gdjs.loggedInCode.GDloadButtonObjects2= [];
gdjs.loggedInCode.GDrefreshLoginButtonObjects1= [];
gdjs.loggedInCode.GDrefreshLoginButtonObjects2= [];


gdjs.loggedInCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exitButton"), gdjs.loggedInCode.GDexitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loggedInCode.GDexitButtonObjects1.length;i<l;++i) {
    if ( gdjs.loggedInCode.GDexitButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.loggedInCode.GDexitButtonObjects1[k] = gdjs.loggedInCode.GDexitButtonObjects1[i];
        ++k;
    }
}
gdjs.loggedInCode.GDexitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title official", false);
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.loggedInCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loggedInCode.GDtitleTextObjects1.length = 0;
gdjs.loggedInCode.GDtitleTextObjects2.length = 0;
gdjs.loggedInCode.GDlogin_9595buttonObjects1.length = 0;
gdjs.loggedInCode.GDlogin_9595buttonObjects2.length = 0;
gdjs.loggedInCode.GDexitButtonObjects1.length = 0;
gdjs.loggedInCode.GDexitButtonObjects2.length = 0;
gdjs.loggedInCode.GDDefault_9595TransparentPanel_959515Objects1.length = 0;
gdjs.loggedInCode.GDDefault_9595TransparentPanel_959515Objects2.length = 0;
gdjs.loggedInCode.GDlogoutButtonObjects1.length = 0;
gdjs.loggedInCode.GDlogoutButtonObjects2.length = 0;
gdjs.loggedInCode.GDsaveButtonObjects1.length = 0;
gdjs.loggedInCode.GDsaveButtonObjects2.length = 0;
gdjs.loggedInCode.GDloadButtonObjects1.length = 0;
gdjs.loggedInCode.GDloadButtonObjects2.length = 0;
gdjs.loggedInCode.GDrefreshLoginButtonObjects1.length = 0;
gdjs.loggedInCode.GDrefreshLoginButtonObjects2.length = 0;

gdjs.loggedInCode.eventsList0(runtimeScene);
gdjs.loggedInCode.GDtitleTextObjects1.length = 0;
gdjs.loggedInCode.GDtitleTextObjects2.length = 0;
gdjs.loggedInCode.GDlogin_9595buttonObjects1.length = 0;
gdjs.loggedInCode.GDlogin_9595buttonObjects2.length = 0;
gdjs.loggedInCode.GDexitButtonObjects1.length = 0;
gdjs.loggedInCode.GDexitButtonObjects2.length = 0;
gdjs.loggedInCode.GDDefault_9595TransparentPanel_959515Objects1.length = 0;
gdjs.loggedInCode.GDDefault_9595TransparentPanel_959515Objects2.length = 0;
gdjs.loggedInCode.GDlogoutButtonObjects1.length = 0;
gdjs.loggedInCode.GDlogoutButtonObjects2.length = 0;
gdjs.loggedInCode.GDsaveButtonObjects1.length = 0;
gdjs.loggedInCode.GDsaveButtonObjects2.length = 0;
gdjs.loggedInCode.GDloadButtonObjects1.length = 0;
gdjs.loggedInCode.GDloadButtonObjects2.length = 0;
gdjs.loggedInCode.GDrefreshLoginButtonObjects1.length = 0;
gdjs.loggedInCode.GDrefreshLoginButtonObjects2.length = 0;


return;

}

gdjs['loggedInCode'] = gdjs.loggedInCode;
