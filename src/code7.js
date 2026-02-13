gdjs.sbCode = {};
gdjs.sbCode.localVariables = [];
gdjs.sbCode.idToCallbackMap = new Map();
gdjs.sbCode.GDNewTextObjects1= [];
gdjs.sbCode.GDNewTextObjects2= [];
gdjs.sbCode.GDNewTextObjects3= [];
gdjs.sbCode.GDSmallGreyButtonObjects1= [];
gdjs.sbCode.GDSmallGreyButtonObjects2= [];
gdjs.sbCode.GDSmallGreyButtonObjects3= [];
gdjs.sbCode.GDsettingsObjects1= [];
gdjs.sbCode.GDsettingsObjects2= [];
gdjs.sbCode.GDsettingsObjects3= [];
gdjs.sbCode.GDNewTiledSpriteObjects1= [];
gdjs.sbCode.GDNewTiledSpriteObjects2= [];
gdjs.sbCode.GDNewTiledSpriteObjects3= [];
gdjs.sbCode.GDNewText2Objects1= [];
gdjs.sbCode.GDNewText2Objects2= [];
gdjs.sbCode.GDNewText2Objects3= [];
gdjs.sbCode.GDSmallGreyButton2Objects1= [];
gdjs.sbCode.GDSmallGreyButton2Objects2= [];
gdjs.sbCode.GDSmallGreyButton2Objects3= [];
gdjs.sbCode.GDbackObjects1= [];
gdjs.sbCode.GDbackObjects2= [];
gdjs.sbCode.GDbackObjects3= [];
gdjs.sbCode.GDNewSpriteObjects1= [];
gdjs.sbCode.GDNewSpriteObjects2= [];
gdjs.sbCode.GDNewSpriteObjects3= [];
gdjs.sbCode.GDNewSprite2Objects1= [];
gdjs.sbCode.GDNewSprite2Objects2= [];
gdjs.sbCode.GDNewSprite2Objects3= [];
gdjs.sbCode.GDSmallGreyButton3Objects1= [];
gdjs.sbCode.GDSmallGreyButton3Objects2= [];
gdjs.sbCode.GDSmallGreyButton3Objects3= [];
gdjs.sbCode.GDSmallGreyButton4Objects1= [];
gdjs.sbCode.GDSmallGreyButton4Objects2= [];
gdjs.sbCode.GDSmallGreyButton4Objects3= [];
gdjs.sbCode.GDbensonObjects1= [];
gdjs.sbCode.GDbensonObjects2= [];
gdjs.sbCode.GDbensonObjects3= [];


gdjs.sbCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sbCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sbCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sbCode.GDNewText2Objects2[i].getBehavior("Text").setText("Coming Soon...");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sbCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sbCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sbCode.GDNewText2Objects2[i].getBehavior("Text").setText("Not Implemented Yet");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sbCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sbCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sbCode.GDNewText2Objects2[i].getBehavior("Text").setText("You can only play these");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sbCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sbCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sbCode.GDNewText2Objects2[i].getBehavior("Text").setText("i am a carrot");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sbCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.sbCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.sbCode.GDNewText2Objects2[i].getBehavior("Text").setText("More Bosses in Newer Updates!");
}
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.sbCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.sbCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.sbCode.GDNewText2Objects1[i].getBehavior("Text").setText("Coming VERY Soon (1.6 showers)");
}
}
elseEventsChainSatisfied = true;
}

}


};gdjs.sbCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 100);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "secret2verysecret", false);
}
elseEventsChainSatisfied = true;
}

}


};gdjs.sbCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Main Menu Berry Dash (FL Remake).mp3", true, 100, 1);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton"), gdjs.sbCode.GDSmallGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sbCode.GDSmallGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.sbCode.GDSmallGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sbCode.GDSmallGreyButtonObjects1[k] = gdjs.sbCode.GDSmallGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.sbCode.GDSmallGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossfight", false);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton2"), gdjs.sbCode.GDSmallGreyButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sbCode.GDSmallGreyButton2Objects1.length;i<l;++i) {
    if ( gdjs.sbCode.GDSmallGreyButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sbCode.GDSmallGreyButton2Objects1[k] = gdjs.sbCode.GDSmallGreyButton2Objects1[i];
        ++k;
    }
}
gdjs.sbCode.GDSmallGreyButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossfight2", false);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton4"), gdjs.sbCode.GDSmallGreyButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sbCode.GDSmallGreyButton4Objects1.length;i<l;++i) {
    if ( gdjs.sbCode.GDSmallGreyButton4Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sbCode.GDSmallGreyButton4Objects1[k] = gdjs.sbCode.GDSmallGreyButton4Objects1[i];
        ++k;
    }
}
gdjs.sbCode.GDSmallGreyButton4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossfight3", false);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.sbCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.sbCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.sbCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.sbCode.GDNewTiledSpriteObjects1[i].getXOffset() + (2));
}
}
elseEventsChainSatisfied = true;
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
gdjs.sbCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.sbCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sbCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.sbCode.GDbackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sbCode.GDbackObjects1[k] = gdjs.sbCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.sbCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sg", false);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
{
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton3"), gdjs.sbCode.GDSmallGreyButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sbCode.GDSmallGreyButton3Objects1.length;i<l;++i) {
    if ( gdjs.sbCode.GDSmallGreyButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sbCode.GDSmallGreyButton3Objects1[k] = gdjs.sbCode.GDSmallGreyButton3Objects1[i];
        ++k;
    }
}
gdjs.sbCode.GDSmallGreyButton3Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Confirm_06.aac", false, 100, 1);
}

{ //Subevents
gdjs.sbCode.eventsList1(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("benson"), gdjs.sbCode.GDbensonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.sbCode.GDbensonObjects1.length;i<l;++i) {
    if ( gdjs.sbCode.GDbensonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.sbCode.GDbensonObjects1[k] = gdjs.sbCode.GDbensonObjects1[i];
        ++k;
    }
}
gdjs.sbCode.GDbensonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossfight4", false);
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.sbCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sbCode.GDNewTextObjects1.length = 0;
gdjs.sbCode.GDNewTextObjects2.length = 0;
gdjs.sbCode.GDNewTextObjects3.length = 0;
gdjs.sbCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.sbCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.sbCode.GDSmallGreyButtonObjects3.length = 0;
gdjs.sbCode.GDsettingsObjects1.length = 0;
gdjs.sbCode.GDsettingsObjects2.length = 0;
gdjs.sbCode.GDsettingsObjects3.length = 0;
gdjs.sbCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.sbCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.sbCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.sbCode.GDNewText2Objects1.length = 0;
gdjs.sbCode.GDNewText2Objects2.length = 0;
gdjs.sbCode.GDNewText2Objects3.length = 0;
gdjs.sbCode.GDSmallGreyButton2Objects1.length = 0;
gdjs.sbCode.GDSmallGreyButton2Objects2.length = 0;
gdjs.sbCode.GDSmallGreyButton2Objects3.length = 0;
gdjs.sbCode.GDbackObjects1.length = 0;
gdjs.sbCode.GDbackObjects2.length = 0;
gdjs.sbCode.GDbackObjects3.length = 0;
gdjs.sbCode.GDNewSpriteObjects1.length = 0;
gdjs.sbCode.GDNewSpriteObjects2.length = 0;
gdjs.sbCode.GDNewSpriteObjects3.length = 0;
gdjs.sbCode.GDNewSprite2Objects1.length = 0;
gdjs.sbCode.GDNewSprite2Objects2.length = 0;
gdjs.sbCode.GDNewSprite2Objects3.length = 0;
gdjs.sbCode.GDSmallGreyButton3Objects1.length = 0;
gdjs.sbCode.GDSmallGreyButton3Objects2.length = 0;
gdjs.sbCode.GDSmallGreyButton3Objects3.length = 0;
gdjs.sbCode.GDSmallGreyButton4Objects1.length = 0;
gdjs.sbCode.GDSmallGreyButton4Objects2.length = 0;
gdjs.sbCode.GDSmallGreyButton4Objects3.length = 0;
gdjs.sbCode.GDbensonObjects1.length = 0;
gdjs.sbCode.GDbensonObjects2.length = 0;
gdjs.sbCode.GDbensonObjects3.length = 0;

gdjs.sbCode.eventsList2(runtimeScene);
gdjs.sbCode.GDNewTextObjects1.length = 0;
gdjs.sbCode.GDNewTextObjects2.length = 0;
gdjs.sbCode.GDNewTextObjects3.length = 0;
gdjs.sbCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.sbCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.sbCode.GDSmallGreyButtonObjects3.length = 0;
gdjs.sbCode.GDsettingsObjects1.length = 0;
gdjs.sbCode.GDsettingsObjects2.length = 0;
gdjs.sbCode.GDsettingsObjects3.length = 0;
gdjs.sbCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.sbCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.sbCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.sbCode.GDNewText2Objects1.length = 0;
gdjs.sbCode.GDNewText2Objects2.length = 0;
gdjs.sbCode.GDNewText2Objects3.length = 0;
gdjs.sbCode.GDSmallGreyButton2Objects1.length = 0;
gdjs.sbCode.GDSmallGreyButton2Objects2.length = 0;
gdjs.sbCode.GDSmallGreyButton2Objects3.length = 0;
gdjs.sbCode.GDbackObjects1.length = 0;
gdjs.sbCode.GDbackObjects2.length = 0;
gdjs.sbCode.GDbackObjects3.length = 0;
gdjs.sbCode.GDNewSpriteObjects1.length = 0;
gdjs.sbCode.GDNewSpriteObjects2.length = 0;
gdjs.sbCode.GDNewSpriteObjects3.length = 0;
gdjs.sbCode.GDNewSprite2Objects1.length = 0;
gdjs.sbCode.GDNewSprite2Objects2.length = 0;
gdjs.sbCode.GDNewSprite2Objects3.length = 0;
gdjs.sbCode.GDSmallGreyButton3Objects1.length = 0;
gdjs.sbCode.GDSmallGreyButton3Objects2.length = 0;
gdjs.sbCode.GDSmallGreyButton3Objects3.length = 0;
gdjs.sbCode.GDSmallGreyButton4Objects1.length = 0;
gdjs.sbCode.GDSmallGreyButton4Objects2.length = 0;
gdjs.sbCode.GDSmallGreyButton4Objects3.length = 0;
gdjs.sbCode.GDbensonObjects1.length = 0;
gdjs.sbCode.GDbensonObjects2.length = 0;
gdjs.sbCode.GDbensonObjects3.length = 0;


return;

}

gdjs['sbCode'] = gdjs.sbCode;
