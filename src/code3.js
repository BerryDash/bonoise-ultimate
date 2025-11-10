gdjs.title_32gamejamCode = {};
gdjs.title_32gamejamCode.localVariables = [];
gdjs.title_32gamejamCode.idToCallbackMap = new Map();
gdjs.title_32gamejamCode.GDNewTextObjects1= [];
gdjs.title_32gamejamCode.GDNewTextObjects2= [];
gdjs.title_32gamejamCode.GDNewTextObjects3= [];
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1= [];
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects2= [];
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects3= [];
gdjs.title_32gamejamCode.GDsettingsObjects1= [];
gdjs.title_32gamejamCode.GDsettingsObjects2= [];
gdjs.title_32gamejamCode.GDsettingsObjects3= [];
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects1= [];
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects2= [];
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects3= [];
gdjs.title_32gamejamCode.GDNewText2Objects1= [];
gdjs.title_32gamejamCode.GDNewText2Objects2= [];
gdjs.title_32gamejamCode.GDNewText2Objects3= [];
gdjs.title_32gamejamCode.GDNewText3Objects1= [];
gdjs.title_32gamejamCode.GDNewText3Objects2= [];
gdjs.title_32gamejamCode.GDNewText3Objects3= [];


gdjs.title_32gamejamCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.title_32gamejamCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.title_32gamejamCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.title_32gamejamCode.GDNewText2Objects2[i].getBehavior("Text").setText("jammed!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.title_32gamejamCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.title_32gamejamCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.title_32gamejamCode.GDNewText2Objects2[i].getBehavior("Text").setText("take control?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.title_32gamejamCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.title_32gamejamCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.title_32gamejamCode.GDNewText2Objects2[i].getBehavior("Text").setText("GameJam Submitting!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.title_32gamejamCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.title_32gamejamCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.title_32gamejamCode.GDNewText2Objects2[i].getBehavior("Text").setText("Demo for GJ");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.title_32gamejamCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.title_32gamejamCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.title_32gamejamCode.GDNewText2Objects2[i].getBehavior("Text").setText("probably a demo for gamejam");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.title_32gamejamCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.title_32gamejamCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.title_32gamejamCode.GDNewText2Objects1[i].getBehavior("Text").setText("BEHOLD, THE POWER OF A JAM!");
}
}
}

}


};gdjs.title_32gamejamCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MenuMusic (1).wav", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton"), gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1[k] = gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena sin título", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.title_32gamejamCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.title_32gamejamCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.title_32gamejamCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.title_32gamejamCode.GDNewTiledSpriteObjects1[i].getXOffset() + (2));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(1, 6));
}

{ //Subevents
gdjs.title_32gamejamCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.title_32gamejamCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.title_32gamejamCode.GDNewTextObjects1.length = 0;
gdjs.title_32gamejamCode.GDNewTextObjects2.length = 0;
gdjs.title_32gamejamCode.GDNewTextObjects3.length = 0;
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects3.length = 0;
gdjs.title_32gamejamCode.GDsettingsObjects1.length = 0;
gdjs.title_32gamejamCode.GDsettingsObjects2.length = 0;
gdjs.title_32gamejamCode.GDsettingsObjects3.length = 0;
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.title_32gamejamCode.GDNewText2Objects1.length = 0;
gdjs.title_32gamejamCode.GDNewText2Objects2.length = 0;
gdjs.title_32gamejamCode.GDNewText2Objects3.length = 0;
gdjs.title_32gamejamCode.GDNewText3Objects1.length = 0;
gdjs.title_32gamejamCode.GDNewText3Objects2.length = 0;
gdjs.title_32gamejamCode.GDNewText3Objects3.length = 0;

gdjs.title_32gamejamCode.eventsList1(runtimeScene);
gdjs.title_32gamejamCode.GDNewTextObjects1.length = 0;
gdjs.title_32gamejamCode.GDNewTextObjects2.length = 0;
gdjs.title_32gamejamCode.GDNewTextObjects3.length = 0;
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.title_32gamejamCode.GDSmallGreyButtonObjects3.length = 0;
gdjs.title_32gamejamCode.GDsettingsObjects1.length = 0;
gdjs.title_32gamejamCode.GDsettingsObjects2.length = 0;
gdjs.title_32gamejamCode.GDsettingsObjects3.length = 0;
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.title_32gamejamCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.title_32gamejamCode.GDNewText2Objects1.length = 0;
gdjs.title_32gamejamCode.GDNewText2Objects2.length = 0;
gdjs.title_32gamejamCode.GDNewText2Objects3.length = 0;
gdjs.title_32gamejamCode.GDNewText3Objects1.length = 0;
gdjs.title_32gamejamCode.GDNewText3Objects2.length = 0;
gdjs.title_32gamejamCode.GDNewText3Objects3.length = 0;


return;

}

gdjs['title_32gamejamCode'] = gdjs.title_32gamejamCode;
