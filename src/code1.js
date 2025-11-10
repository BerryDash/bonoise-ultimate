gdjs.bossfightCode = {};
gdjs.bossfightCode.localVariables = [];
gdjs.bossfightCode.idToCallbackMap = new Map();
gdjs.bossfightCode.GDNewTiledSpriteObjects1= [];
gdjs.bossfightCode.GDNewTiledSpriteObjects2= [];
gdjs.bossfightCode.GDNewTiledSprite2Objects1= [];
gdjs.bossfightCode.GDNewTiledSprite2Objects2= [];
gdjs.bossfightCode.GDPlayerObjects1= [];
gdjs.bossfightCode.GDPlayerObjects2= [];
gdjs.bossfightCode.GDFlatDarkJoystickObjects1= [];
gdjs.bossfightCode.GDFlatDarkJoystickObjects2= [];
gdjs.bossfightCode.GDBerryObjects1= [];
gdjs.bossfightCode.GDBerryObjects2= [];
gdjs.bossfightCode.GDBerryNormalSpawnObjects1= [];
gdjs.bossfightCode.GDBerryNormalSpawnObjects2= [];
gdjs.bossfightCode.GDNewTextObjects1= [];
gdjs.bossfightCode.GDNewTextObjects2= [];
gdjs.bossfightCode.GDNewTiledSprite4Objects1= [];
gdjs.bossfightCode.GDNewTiledSprite4Objects2= [];
gdjs.bossfightCode.GDSpeedySpawnerObjects1= [];
gdjs.bossfightCode.GDSpeedySpawnerObjects2= [];
gdjs.bossfightCode.GDSpeedyObjects1= [];
gdjs.bossfightCode.GDSpeedyObjects2= [];
gdjs.bossfightCode.GDNewText2Objects1= [];
gdjs.bossfightCode.GDNewText2Objects2= [];
gdjs.bossfightCode.GDPhysiscsObjects1= [];
gdjs.bossfightCode.GDPhysiscsObjects2= [];
gdjs.bossfightCode.GDRNGBerryObjects1= [];
gdjs.bossfightCode.GDRNGBerryObjects2= [];
gdjs.bossfightCode.GDrngspawnObjects1= [];
gdjs.bossfightCode.GDrngspawnObjects2= [];
gdjs.bossfightCode.GDExplotionObjects1= [];
gdjs.bossfightCode.GDExplotionObjects2= [];
gdjs.bossfightCode.GDCarl_9595O_9595DasherObjects1= [];
gdjs.bossfightCode.GDCarl_9595O_9595DasherObjects2= [];
gdjs.bossfightCode.GDPlayer2Objects1= [];
gdjs.bossfightCode.GDPlayer2Objects2= [];


gdjs.bossfightCode.asyncCallback11618060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfightCode.localVariables);
gdjs.bossfightCode.localVariables.length = 0;
}
gdjs.bossfightCode.idToCallbackMap.set(11618060, gdjs.bossfightCode.asyncCallback11618060);
gdjs.bossfightCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfightCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs.bossfightCode.asyncCallback11618060(runtimeScene, asyncObjectsList)), 11618060, asyncObjectsList);
}
}

}


};gdjs.bossfightCode.userFunc0x90a470 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
// Obtenemos la escena actual
const scene = runtimeScene;

// Configuración del spawner
const minX = 0; // Límite izquierdo de aparición
const maxX = scene.getGame().getGameResolutionWidth(); // Límite derecho (ancho de pantalla)
const spawnY = -50; // Posición inicial (un poco arriba de la pantalla)
const berryTypes = ["poisonberry", "MinusBerry"];

// Intervalo en segundos entre cada spawn
const spawnInterval = 1.5;

// Verificamos si el temporizador existe; si no, lo creamos
if (!scene.getVariables().has("berryTimer")) {
    scene.getVariables().get("berryTimer").setNumber(0);
}

// Incrementamos el temporizador con el tiempo del frame actual
scene.getVariables().get("berryTimer").add(scene.getTimeManager().getElapsedTime() / 1000);

// Cuando el temporizador supera el intervalo...
if (scene.getVariables().get("berryTimer").getAsNumber() >= spawnInterval) {
    // Reseteamos el temporizador
    scene.getVariables().get("berryTimer").setNumber(0);

    // Elegimos un tipo de berry al azar
    const randomBerryName = berryTypes[Math.floor(Math.random() * berryTypes.length)];

    // Posición aleatoria en el eje X
    const randomX = Math.random() * (maxX - minX) + minX;

    // Creamos la berry en la escena
    const berry = scene.createObject(randomBerryName);
    if (berry) {
        berry.setPosition(randomX, spawnY);
    }
}

};
gdjs.bossfightCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDFlatDarkJoystickObjects1[k] = gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDFlatDarkJoystickObjects1[k] = gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.bossfightCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDNewTextObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "versus.mp3", true, 100, 1);
}

{ //Subevents
gdjs.bossfightCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects1[k] = gdjs.bossfightCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects1[k] = gdjs.bossfightCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].rotate(360, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BerryNormalSpawn"), gdjs.bossfightCode.GDBerryNormalSpawnObjects1);

const objects = gdjs.bossfightCode.GDBerryNormalSpawnObjects1;
gdjs.bossfightCode.userFunc0x90a470(runtimeScene, objects);

}


};

gdjs.bossfightCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bossfightCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.bossfightCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.bossfightCode.GDPlayerObjects1.length = 0;
gdjs.bossfightCode.GDPlayerObjects2.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.bossfightCode.GDBerryObjects1.length = 0;
gdjs.bossfightCode.GDBerryObjects2.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects1.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects2.length = 0;
gdjs.bossfightCode.GDNewTextObjects1.length = 0;
gdjs.bossfightCode.GDNewTextObjects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects1.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects2.length = 0;
gdjs.bossfightCode.GDSpeedyObjects1.length = 0;
gdjs.bossfightCode.GDSpeedyObjects2.length = 0;
gdjs.bossfightCode.GDNewText2Objects1.length = 0;
gdjs.bossfightCode.GDNewText2Objects2.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects1.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects2.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects1.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects2.length = 0;
gdjs.bossfightCode.GDrngspawnObjects1.length = 0;
gdjs.bossfightCode.GDrngspawnObjects2.length = 0;
gdjs.bossfightCode.GDExplotionObjects1.length = 0;
gdjs.bossfightCode.GDExplotionObjects2.length = 0;
gdjs.bossfightCode.GDCarl_9595O_9595DasherObjects1.length = 0;
gdjs.bossfightCode.GDCarl_9595O_9595DasherObjects2.length = 0;
gdjs.bossfightCode.GDPlayer2Objects1.length = 0;
gdjs.bossfightCode.GDPlayer2Objects2.length = 0;

gdjs.bossfightCode.eventsList1(runtimeScene);
gdjs.bossfightCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.bossfightCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.bossfightCode.GDPlayerObjects1.length = 0;
gdjs.bossfightCode.GDPlayerObjects2.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.bossfightCode.GDBerryObjects1.length = 0;
gdjs.bossfightCode.GDBerryObjects2.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects1.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects2.length = 0;
gdjs.bossfightCode.GDNewTextObjects1.length = 0;
gdjs.bossfightCode.GDNewTextObjects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects1.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects2.length = 0;
gdjs.bossfightCode.GDSpeedyObjects1.length = 0;
gdjs.bossfightCode.GDSpeedyObjects2.length = 0;
gdjs.bossfightCode.GDNewText2Objects1.length = 0;
gdjs.bossfightCode.GDNewText2Objects2.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects1.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects2.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects1.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects2.length = 0;
gdjs.bossfightCode.GDrngspawnObjects1.length = 0;
gdjs.bossfightCode.GDrngspawnObjects2.length = 0;
gdjs.bossfightCode.GDExplotionObjects1.length = 0;
gdjs.bossfightCode.GDExplotionObjects2.length = 0;
gdjs.bossfightCode.GDCarl_9595O_9595DasherObjects1.length = 0;
gdjs.bossfightCode.GDCarl_9595O_9595DasherObjects2.length = 0;
gdjs.bossfightCode.GDPlayer2Objects1.length = 0;
gdjs.bossfightCode.GDPlayer2Objects2.length = 0;


return;

}

gdjs['bossfightCode'] = gdjs.bossfightCode;
