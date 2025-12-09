gdjs.bossfight2Code = {};
gdjs.bossfight2Code.localVariables = [];
gdjs.bossfight2Code.idToCallbackMap = new Map();
gdjs.bossfight2Code.GDFireButtonObjects1_1final = [];

gdjs.bossfight2Code.GDNewTiledSpriteObjects1= [];
gdjs.bossfight2Code.GDNewTiledSpriteObjects2= [];
gdjs.bossfight2Code.GDNewTiledSpriteObjects3= [];
gdjs.bossfight2Code.GDNewTiledSprite2Objects1= [];
gdjs.bossfight2Code.GDNewTiledSprite2Objects2= [];
gdjs.bossfight2Code.GDNewTiledSprite2Objects3= [];
gdjs.bossfight2Code.GDPlayerObjects1= [];
gdjs.bossfight2Code.GDPlayerObjects2= [];
gdjs.bossfight2Code.GDPlayerObjects3= [];
gdjs.bossfight2Code.GDFlatDarkJoystickObjects1= [];
gdjs.bossfight2Code.GDFlatDarkJoystickObjects2= [];
gdjs.bossfight2Code.GDFlatDarkJoystickObjects3= [];
gdjs.bossfight2Code.GDBerryObjects1= [];
gdjs.bossfight2Code.GDBerryObjects2= [];
gdjs.bossfight2Code.GDBerryObjects3= [];
gdjs.bossfight2Code.GDBerryNormalSpawnObjects1= [];
gdjs.bossfight2Code.GDBerryNormalSpawnObjects2= [];
gdjs.bossfight2Code.GDBerryNormalSpawnObjects3= [];
gdjs.bossfight2Code.GDbosshptetxObjects1= [];
gdjs.bossfight2Code.GDbosshptetxObjects2= [];
gdjs.bossfight2Code.GDbosshptetxObjects3= [];
gdjs.bossfight2Code.GDNewTiledSprite4Objects1= [];
gdjs.bossfight2Code.GDNewTiledSprite4Objects2= [];
gdjs.bossfight2Code.GDNewTiledSprite4Objects3= [];
gdjs.bossfight2Code.GDSpeedySpawnerObjects1= [];
gdjs.bossfight2Code.GDSpeedySpawnerObjects2= [];
gdjs.bossfight2Code.GDSpeedySpawnerObjects3= [];
gdjs.bossfight2Code.GDSpeedyObjects1= [];
gdjs.bossfight2Code.GDSpeedyObjects2= [];
gdjs.bossfight2Code.GDSpeedyObjects3= [];
gdjs.bossfight2Code.GDcpObjects1= [];
gdjs.bossfight2Code.GDcpObjects2= [];
gdjs.bossfight2Code.GDcpObjects3= [];
gdjs.bossfight2Code.GDPhysiscsObjects1= [];
gdjs.bossfight2Code.GDPhysiscsObjects2= [];
gdjs.bossfight2Code.GDPhysiscsObjects3= [];
gdjs.bossfight2Code.GDRNGBerryObjects1= [];
gdjs.bossfight2Code.GDRNGBerryObjects2= [];
gdjs.bossfight2Code.GDRNGBerryObjects3= [];
gdjs.bossfight2Code.GDrngspawnObjects1= [];
gdjs.bossfight2Code.GDrngspawnObjects2= [];
gdjs.bossfight2Code.GDrngspawnObjects3= [];
gdjs.bossfight2Code.GDExplotionObjects1= [];
gdjs.bossfight2Code.GDExplotionObjects2= [];
gdjs.bossfight2Code.GDExplotionObjects3= [];
gdjs.bossfight2Code.GDKingCarlosObjects1= [];
gdjs.bossfight2Code.GDKingCarlosObjects2= [];
gdjs.bossfight2Code.GDKingCarlosObjects3= [];
gdjs.bossfight2Code.GDPlayer2Objects1= [];
gdjs.bossfight2Code.GDPlayer2Objects2= [];
gdjs.bossfight2Code.GDPlayer2Objects3= [];
gdjs.bossfight2Code.GDFireButtonObjects1= [];
gdjs.bossfight2Code.GDFireButtonObjects2= [];
gdjs.bossfight2Code.GDFireButtonObjects3= [];
gdjs.bossfight2Code.GDcontrollerObjects1= [];
gdjs.bossfight2Code.GDcontrollerObjects2= [];
gdjs.bossfight2Code.GDcontrollerObjects3= [];
gdjs.bossfight2Code.GDexplosionObjects1= [];
gdjs.bossfight2Code.GDexplosionObjects2= [];
gdjs.bossfight2Code.GDexplosionObjects3= [];
gdjs.bossfight2Code.GDbosstextObjects1= [];
gdjs.bossfight2Code.GDbosstextObjects2= [];
gdjs.bossfight2Code.GDbosstextObjects3= [];
gdjs.bossfight2Code.GDNewTextObjects1= [];
gdjs.bossfight2Code.GDNewTextObjects2= [];
gdjs.bossfight2Code.GDNewTextObjects3= [];
gdjs.bossfight2Code.GDNewText3Objects1= [];
gdjs.bossfight2Code.GDNewText3Objects2= [];
gdjs.bossfight2Code.GDNewText3Objects3= [];
gdjs.bossfight2Code.GDNewTiledSprite3Objects1= [];
gdjs.bossfight2Code.GDNewTiledSprite3Objects2= [];
gdjs.bossfight2Code.GDNewTiledSprite3Objects3= [];
gdjs.bossfight2Code.GDThePainterObjects1= [];
gdjs.bossfight2Code.GDThePainterObjects2= [];
gdjs.bossfight2Code.GDThePainterObjects3= [];
gdjs.bossfight2Code.GDNewTiledSprite5Objects1= [];
gdjs.bossfight2Code.GDNewTiledSprite5Objects2= [];
gdjs.bossfight2Code.GDNewTiledSprite5Objects3= [];
gdjs.bossfight2Code.GDNewSpriteObjects1= [];
gdjs.bossfight2Code.GDNewSpriteObjects2= [];
gdjs.bossfight2Code.GDNewSpriteObjects3= [];


gdjs.bossfight2Code.asyncCallback20437460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
gdjs.bossfight2Code.localVariables.length = 0;
}
gdjs.bossfight2Code.idToCallbackMap.set(20437460, gdjs.bossfight2Code.asyncCallback20437460);
gdjs.bossfight2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs.bossfight2Code.asyncCallback20437460(runtimeScene, asyncObjectsList)), 20437460, asyncObjectsList);
}
}

}


};gdjs.bossfight2Code.userFunc0xf649f8 = function GDJSInlineCode(runtimeScene, objects) {
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
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects1Objects = Hashtable.newFrom({"controller": gdjs.bossfight2Code.GDcontrollerObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDThePainterObjects1Objects = Hashtable.newFrom({"ThePainter": gdjs.bossfight2Code.GDThePainterObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.bossfight2Code.GDexplosionObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfight2Code.GDcontrollerObjects2});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfight2Code.GDcontrollerObjects2});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects1Objects = Hashtable.newFrom({"controller": gdjs.bossfight2Code.GDcontrollerObjects1});
gdjs.bossfight2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects2[k] = gdjs.bossfight2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects2 */
gdjs.bossfight2Code.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfight2Code.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfight2Code.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects, 0, 500, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects2[k] = gdjs.bossfight2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects2 */
gdjs.bossfight2Code.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfight2Code.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfight2Code.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects, 0, -(500), null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects1[k] = gdjs.bossfight2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects1 */
gdjs.bossfight2Code.GDcontrollerObjects1.length = 0;

{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.bossfight2Code.GDPlayerObjects1[i].getPointX("")), (gdjs.bossfight2Code.GDPlayerObjects1[i].getPointY("")) + 59, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects1Objects, 0, 500, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


};gdjs.bossfight2Code.asyncCallback20454228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BSRank2", false);
}
gdjs.bossfight2Code.localVariables.length = 0;
}
gdjs.bossfight2Code.idToCallbackMap.set(20454228, gdjs.bossfight2Code.asyncCallback20454228);
gdjs.bossfight2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.bossfight2Code.asyncCallback20454228(runtimeScene, asyncObjectsList)), 20454228, asyncObjectsList);
}
}

}


};gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.bossfight2Code.GDNewTextObjects1});
gdjs.bossfight2Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.bossfight2Code.GDNewTextObjects2 */
{for(var i = 0, len = gdjs.bossfight2Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.bossfight2Code.GDNewTextObjects2[i].getBehavior("Opacity").setOpacity(gdjs.bossfight2Code.GDNewTextObjects2[i].getBehavior("Opacity").getOpacity() - (10));
}
}
}

}


};gdjs.bossfight2Code.asyncCallback20457316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.bossfight2Code.GDNewTextObjects2);

{for(var i = 0, len = gdjs.bossfight2Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.bossfight2Code.GDNewTextObjects2[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.bossfight2Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bossfight2Code.localVariables.length = 0;
}
gdjs.bossfight2Code.idToCallbackMap.set(20457316, gdjs.bossfight2Code.asyncCallback20457316);
gdjs.bossfight2Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
for (const obj of gdjs.bossfight2Code.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bossfight2Code.asyncCallback20457316(runtimeScene, asyncObjectsList)), 20457316, asyncObjectsList);
}
}

}


};gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDThePainterObjects1Objects = Hashtable.newFrom({"ThePainter": gdjs.bossfight2Code.GDThePainterObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.bossfight2Code.GDPlayerObjects1});
gdjs.bossfight2Code.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.bossfight2Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs.bossfight2Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.bossfight2Code.GDNewTextObjects2[i].getBehavior("Opacity").setOpacity(gdjs.bossfight2Code.GDNewTextObjects2[i].getBehavior("Opacity").getOpacity() - (10));
}
}
}

}


};gdjs.bossfight2Code.asyncCallback20460484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossfight2", false);
}

{ //Subevents
gdjs.bossfight2Code.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bossfight2Code.localVariables.length = 0;
}
gdjs.bossfight2Code.idToCallbackMap.set(20460484, gdjs.bossfight2Code.asyncCallback20460484);
gdjs.bossfight2Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfight2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bossfight2Code.asyncCallback20460484(runtimeScene, asyncObjectsList)), 20460484, asyncObjectsList);
}
}

}


};gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfight2Code.GDcontrollerObjects2});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfight2Code.GDcontrollerObjects2});
gdjs.bossfight2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects2[k] = gdjs.bossfight2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects2 */
gdjs.bossfight2Code.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfight2Code.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfight2Code.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects, 0, 500, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects2[k] = gdjs.bossfight2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects2 */
gdjs.bossfight2Code.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfight2Code.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfight2Code.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects2Objects, 0, -(500), null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.bossfight2Code.GDPlayerObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewTiledSprite5Objects1Objects = Hashtable.newFrom({"NewTiledSprite5": gdjs.bossfight2Code.GDNewTiledSprite5Objects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.bossfight2Code.GDPlayerObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewTiledSprite5Objects1Objects = Hashtable.newFrom({"NewTiledSprite5": gdjs.bossfight2Code.GDNewTiledSprite5Objects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.bossfight2Code.GDNewSpriteObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.bossfight2Code.GDPlayerObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.bossfight2Code.GDNewSpriteObjects1});
gdjs.bossfight2Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.bossfight2Code.GDThePainterObjects1 */
gdjs.bossfight2Code.GDNewSpriteObjects1.length = 0;

{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("FireBullet").Fire((gdjs.bossfight2Code.GDThePainterObjects1[i].getPointX("")), (gdjs.bossfight2Code.GDThePainterObjects1[i].getPointY("")) + 51, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects, 0, 500, null);
}
}
}

}


};gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.bossfight2Code.GDNewSpriteObjects1});
gdjs.bossfight2Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.bossfight2Code.GDThePainterObjects1 */
gdjs.bossfight2Code.GDNewSpriteObjects1.length = 0;

{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("FireBullet").Fire((gdjs.bossfight2Code.GDThePainterObjects1[i].getPointX("")), (gdjs.bossfight2Code.GDThePainterObjects1[i].getPointY("")) + 51, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects, 0, -(500), null);
}
}
}

}


};gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects1Objects = Hashtable.newFrom({"controller": gdjs.bossfight2Code.GDcontrollerObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.bossfight2Code.GDNewSpriteObjects1});
gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.bossfight2Code.GDexplosionObjects1});
gdjs.bossfight2Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfight2Code.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[k] = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfight2Code.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[k] = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bosshptetx"), gdjs.bossfight2Code.GDbosshptetxObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDbosshptetxObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDbosshptetxObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Painting in the Wrong Canvas.mp3", 1, true, 100, 1);
}

{ //Subevents
gdjs.bossfight2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects1[k] = gdjs.bossfight2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects1[k] = gdjs.bossfight2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfight2Code.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[k] = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
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

gdjs.copyArray(runtimeScene.getObjects("BerryNormalSpawn"), gdjs.bossfight2Code.GDBerryNormalSpawnObjects1);

const objects = gdjs.bossfight2Code.GDBerryNormalSpawnObjects1;
gdjs.bossfight2Code.userFunc0xf649f8(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfight2Code.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[k] = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.bossfight2Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.bossfight2Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDPlayerObjects1[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Pathfinding").setSpeed(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.bossfight2Code.GDcontrollerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects1Objects, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDThePainterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20444980);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Berry"), gdjs.bossfight2Code.GDBerryObjects1);
/* Reuse gdjs.bossfight2Code.GDThePainterObjects1 */
gdjs.bossfight2Code.GDexplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDexplosionObjects1Objects, (( gdjs.bossfight2Code.GDThePainterObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDThePainterObjects1[0].getPointX("")), (( gdjs.bossfight2Code.GDThePainterObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDThePainterObjects1[0].getPointY("")) - 10, "");
}
{for(var i = 0, len = gdjs.bossfight2Code.GDBerryObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Health").Hit(5, true, true, null);
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDexplosionObjects1[i].getBehavior("Scale").setScale(2);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ssvid.app--deltarune-explosion-greenscreen.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("explosion"), gdjs.bossfight2Code.GDexplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDexplosionObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDexplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDexplosionObjects1[k] = gdjs.bossfight2Code.GDexplosionObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDexplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDexplosionObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDexplosionObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfight2Code.GDKingCarlosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDKingCarlosObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDKingCarlosObjects1[i].getBehavior("Physics2").getLinearVelocityX() == gdjs.evtTools.common.pi() ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDKingCarlosObjects1[k] = gdjs.bossfight2Code.GDKingCarlosObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDKingCarlosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDKingCarlosObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDKingCarlosObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfight2Code.GDKingCarlosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDKingCarlosObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDKingCarlosObjects1[i].getBehavior("Physics2").getLinearVelocityX() == -(200) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDKingCarlosObjects1[k] = gdjs.bossfight2Code.GDKingCarlosObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDKingCarlosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDKingCarlosObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDKingCarlosObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.bossfight2Code.GDFireButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.bossfight2Code.GDFireButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.bossfight2Code.GDFireButtonObjects2);
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDFireButtonObjects2.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDFireButtonObjects2[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.bossfight2Code.GDFireButtonObjects2[k] = gdjs.bossfight2Code.GDFireButtonObjects2[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDFireButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.bossfight2Code.GDFireButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.bossfight2Code.GDFireButtonObjects1_1final.indexOf(gdjs.bossfight2Code.GDFireButtonObjects2[j]) === -1 )
            gdjs.bossfight2Code.GDFireButtonObjects1_1final.push(gdjs.bossfight2Code.GDFireButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsButtonJustPressed.func(runtimeScene, 1, "b", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.bossfight2Code.GDFireButtonObjects1_1final, gdjs.bossfight2Code.GDFireButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20449148);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.bossfight2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.bossfight2Code.GDcontrollerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDcontrollerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDcontrollerObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDThePainterObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDThePainterObjects1[k] = gdjs.bossfight2Code.GDThePainterObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDThePainterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDThePainterObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1.5);
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "bs");
}

{ //Subevents
gdjs.bossfight2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.bossfight2Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);
gdjs.copyArray(runtimeScene.getObjects("bosshptetx"), gdjs.bossfight2Code.GDbosshptetxObjects1);
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.bossfight2Code.GDcontrollerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDbosshptetxObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDbosshptetxObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.bossfight2Code.GDThePainterObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDThePainterObjects1[0].getBehavior("Health").Health(null))) + "/100");
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDNewText3Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.bossfight2Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDPlayerObjects1[0].getBehavior("Health").Health(null))) + "/10");
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDcontrollerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDcontrollerObjects1[i].rotate(100, runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.bossfight2Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDPlayerObjects1[0].getBehavior("Health").Health(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDThePainterObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Health").IsJustDodged(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDThePainterObjects1[k] = gdjs.bossfight2Code.GDThePainterObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDThePainterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDThePainterObjects1 */
gdjs.bossfight2Code.GDNewTextObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 6.aac", false, 100, 1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewTextObjects1Objects, (( gdjs.bossfight2Code.GDThePainterObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDThePainterObjects1[0].getPointX("")), (( gdjs.bossfight2Code.GDThePainterObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDThePainterObjects1[0].getPointY("")) - 10, "");
}

{ //Subevents
gdjs.bossfight2Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDThePainterObjects1Objects, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("Health").IsJustDamaged(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects1[k] = gdjs.bossfight2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDPlayerObjects1[k] = gdjs.bossfight2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.bossfight2Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.bossfight2Code.GDFireButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfight2Code.GDFlatDarkJoystickObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bs");
}
{for(var i = 0, len = gdjs.bossfight2Code.GDFireButtonObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDFireButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "bs"), 2));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cp"), gdjs.bossfight2Code.GDcpObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDcpObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDcpObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.bossfight2Code.GDFireButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfight2Code.GDFlatDarkJoystickObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDFireButtonObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDFireButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDFlatDarkJoystickObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20464124);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.bossfight2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.bossfight2Code.GDNewTiledSprite3Objects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDNewTiledSprite3Objects1[i].setXOffset(gdjs.bossfight2Code.GDNewTiledSprite3Objects1[i].getXOffset() + (0.1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite5"), gdjs.bossfight2Code.GDNewTiledSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewTiledSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite5"), gdjs.bossfight2Code.GDNewTiledSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewTiledSprite5Objects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);
{for(var i = 0, len = gdjs.bossfight2Code.GDThePainterObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.bossfight2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfight2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20453484);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfight2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDThePainterObjects1.length;i<l;++i) {
    if ( !(gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDThePainterObjects1[k] = gdjs.bossfight2Code.GDThePainterObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDThePainterObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.bossfight2Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ThePainter"), gdjs.bossfight2Code.GDThePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfight2Code.GDThePainterObjects1.length;i<l;++i) {
    if ( gdjs.bossfight2Code.GDThePainterObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.bossfight2Code.GDThePainterObjects1[k] = gdjs.bossfight2Code.GDThePainterObjects1[i];
        ++k;
    }
}
gdjs.bossfight2Code.GDThePainterObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.bossfight2Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.bossfight2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.bossfight2Code.GDcontrollerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDcontrollerObjects1Objects, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20473748);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.bossfight2Code.GDNewSpriteObjects1 */
/* Reuse gdjs.bossfight2Code.GDcontrollerObjects1 */
gdjs.bossfight2Code.GDexplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bossfight2Code.mapOfGDgdjs_9546bossfight2Code_9546GDexplosionObjects1Objects, (( gdjs.bossfight2Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDNewSpriteObjects1[0].getPointX("")), (( gdjs.bossfight2Code.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.bossfight2Code.GDNewSpriteObjects1[0].getPointY("")) - 10, "");
}
{for(var i = 0, len = gdjs.bossfight2Code.GDcontrollerObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDcontrollerObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDNewSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.bossfight2Code.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.bossfight2Code.GDexplosionObjects1[i].getBehavior("Scale").setScale(2);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ssvid.app--deltarune-explosion-greenscreen.mp3", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.bossfight2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bossfight2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.bossfight2Code.GDPlayerObjects1.length = 0;
gdjs.bossfight2Code.GDPlayerObjects2.length = 0;
gdjs.bossfight2Code.GDPlayerObjects3.length = 0;
gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length = 0;
gdjs.bossfight2Code.GDFlatDarkJoystickObjects2.length = 0;
gdjs.bossfight2Code.GDFlatDarkJoystickObjects3.length = 0;
gdjs.bossfight2Code.GDBerryObjects1.length = 0;
gdjs.bossfight2Code.GDBerryObjects2.length = 0;
gdjs.bossfight2Code.GDBerryObjects3.length = 0;
gdjs.bossfight2Code.GDBerryNormalSpawnObjects1.length = 0;
gdjs.bossfight2Code.GDBerryNormalSpawnObjects2.length = 0;
gdjs.bossfight2Code.GDBerryNormalSpawnObjects3.length = 0;
gdjs.bossfight2Code.GDbosshptetxObjects1.length = 0;
gdjs.bossfight2Code.GDbosshptetxObjects2.length = 0;
gdjs.bossfight2Code.GDbosshptetxObjects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite4Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite4Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite4Objects3.length = 0;
gdjs.bossfight2Code.GDSpeedySpawnerObjects1.length = 0;
gdjs.bossfight2Code.GDSpeedySpawnerObjects2.length = 0;
gdjs.bossfight2Code.GDSpeedySpawnerObjects3.length = 0;
gdjs.bossfight2Code.GDSpeedyObjects1.length = 0;
gdjs.bossfight2Code.GDSpeedyObjects2.length = 0;
gdjs.bossfight2Code.GDSpeedyObjects3.length = 0;
gdjs.bossfight2Code.GDcpObjects1.length = 0;
gdjs.bossfight2Code.GDcpObjects2.length = 0;
gdjs.bossfight2Code.GDcpObjects3.length = 0;
gdjs.bossfight2Code.GDPhysiscsObjects1.length = 0;
gdjs.bossfight2Code.GDPhysiscsObjects2.length = 0;
gdjs.bossfight2Code.GDPhysiscsObjects3.length = 0;
gdjs.bossfight2Code.GDRNGBerryObjects1.length = 0;
gdjs.bossfight2Code.GDRNGBerryObjects2.length = 0;
gdjs.bossfight2Code.GDRNGBerryObjects3.length = 0;
gdjs.bossfight2Code.GDrngspawnObjects1.length = 0;
gdjs.bossfight2Code.GDrngspawnObjects2.length = 0;
gdjs.bossfight2Code.GDrngspawnObjects3.length = 0;
gdjs.bossfight2Code.GDExplotionObjects1.length = 0;
gdjs.bossfight2Code.GDExplotionObjects2.length = 0;
gdjs.bossfight2Code.GDExplotionObjects3.length = 0;
gdjs.bossfight2Code.GDKingCarlosObjects1.length = 0;
gdjs.bossfight2Code.GDKingCarlosObjects2.length = 0;
gdjs.bossfight2Code.GDKingCarlosObjects3.length = 0;
gdjs.bossfight2Code.GDPlayer2Objects1.length = 0;
gdjs.bossfight2Code.GDPlayer2Objects2.length = 0;
gdjs.bossfight2Code.GDPlayer2Objects3.length = 0;
gdjs.bossfight2Code.GDFireButtonObjects1.length = 0;
gdjs.bossfight2Code.GDFireButtonObjects2.length = 0;
gdjs.bossfight2Code.GDFireButtonObjects3.length = 0;
gdjs.bossfight2Code.GDcontrollerObjects1.length = 0;
gdjs.bossfight2Code.GDcontrollerObjects2.length = 0;
gdjs.bossfight2Code.GDcontrollerObjects3.length = 0;
gdjs.bossfight2Code.GDexplosionObjects1.length = 0;
gdjs.bossfight2Code.GDexplosionObjects2.length = 0;
gdjs.bossfight2Code.GDexplosionObjects3.length = 0;
gdjs.bossfight2Code.GDbosstextObjects1.length = 0;
gdjs.bossfight2Code.GDbosstextObjects2.length = 0;
gdjs.bossfight2Code.GDbosstextObjects3.length = 0;
gdjs.bossfight2Code.GDNewTextObjects1.length = 0;
gdjs.bossfight2Code.GDNewTextObjects2.length = 0;
gdjs.bossfight2Code.GDNewTextObjects3.length = 0;
gdjs.bossfight2Code.GDNewText3Objects1.length = 0;
gdjs.bossfight2Code.GDNewText3Objects2.length = 0;
gdjs.bossfight2Code.GDNewText3Objects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite3Objects3.length = 0;
gdjs.bossfight2Code.GDThePainterObjects1.length = 0;
gdjs.bossfight2Code.GDThePainterObjects2.length = 0;
gdjs.bossfight2Code.GDThePainterObjects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite5Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite5Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite5Objects3.length = 0;
gdjs.bossfight2Code.GDNewSpriteObjects1.length = 0;
gdjs.bossfight2Code.GDNewSpriteObjects2.length = 0;
gdjs.bossfight2Code.GDNewSpriteObjects3.length = 0;

gdjs.bossfight2Code.eventsList10(runtimeScene);
gdjs.bossfight2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite2Objects3.length = 0;
gdjs.bossfight2Code.GDPlayerObjects1.length = 0;
gdjs.bossfight2Code.GDPlayerObjects2.length = 0;
gdjs.bossfight2Code.GDPlayerObjects3.length = 0;
gdjs.bossfight2Code.GDFlatDarkJoystickObjects1.length = 0;
gdjs.bossfight2Code.GDFlatDarkJoystickObjects2.length = 0;
gdjs.bossfight2Code.GDFlatDarkJoystickObjects3.length = 0;
gdjs.bossfight2Code.GDBerryObjects1.length = 0;
gdjs.bossfight2Code.GDBerryObjects2.length = 0;
gdjs.bossfight2Code.GDBerryObjects3.length = 0;
gdjs.bossfight2Code.GDBerryNormalSpawnObjects1.length = 0;
gdjs.bossfight2Code.GDBerryNormalSpawnObjects2.length = 0;
gdjs.bossfight2Code.GDBerryNormalSpawnObjects3.length = 0;
gdjs.bossfight2Code.GDbosshptetxObjects1.length = 0;
gdjs.bossfight2Code.GDbosshptetxObjects2.length = 0;
gdjs.bossfight2Code.GDbosshptetxObjects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite4Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite4Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite4Objects3.length = 0;
gdjs.bossfight2Code.GDSpeedySpawnerObjects1.length = 0;
gdjs.bossfight2Code.GDSpeedySpawnerObjects2.length = 0;
gdjs.bossfight2Code.GDSpeedySpawnerObjects3.length = 0;
gdjs.bossfight2Code.GDSpeedyObjects1.length = 0;
gdjs.bossfight2Code.GDSpeedyObjects2.length = 0;
gdjs.bossfight2Code.GDSpeedyObjects3.length = 0;
gdjs.bossfight2Code.GDcpObjects1.length = 0;
gdjs.bossfight2Code.GDcpObjects2.length = 0;
gdjs.bossfight2Code.GDcpObjects3.length = 0;
gdjs.bossfight2Code.GDPhysiscsObjects1.length = 0;
gdjs.bossfight2Code.GDPhysiscsObjects2.length = 0;
gdjs.bossfight2Code.GDPhysiscsObjects3.length = 0;
gdjs.bossfight2Code.GDRNGBerryObjects1.length = 0;
gdjs.bossfight2Code.GDRNGBerryObjects2.length = 0;
gdjs.bossfight2Code.GDRNGBerryObjects3.length = 0;
gdjs.bossfight2Code.GDrngspawnObjects1.length = 0;
gdjs.bossfight2Code.GDrngspawnObjects2.length = 0;
gdjs.bossfight2Code.GDrngspawnObjects3.length = 0;
gdjs.bossfight2Code.GDExplotionObjects1.length = 0;
gdjs.bossfight2Code.GDExplotionObjects2.length = 0;
gdjs.bossfight2Code.GDExplotionObjects3.length = 0;
gdjs.bossfight2Code.GDKingCarlosObjects1.length = 0;
gdjs.bossfight2Code.GDKingCarlosObjects2.length = 0;
gdjs.bossfight2Code.GDKingCarlosObjects3.length = 0;
gdjs.bossfight2Code.GDPlayer2Objects1.length = 0;
gdjs.bossfight2Code.GDPlayer2Objects2.length = 0;
gdjs.bossfight2Code.GDPlayer2Objects3.length = 0;
gdjs.bossfight2Code.GDFireButtonObjects1.length = 0;
gdjs.bossfight2Code.GDFireButtonObjects2.length = 0;
gdjs.bossfight2Code.GDFireButtonObjects3.length = 0;
gdjs.bossfight2Code.GDcontrollerObjects1.length = 0;
gdjs.bossfight2Code.GDcontrollerObjects2.length = 0;
gdjs.bossfight2Code.GDcontrollerObjects3.length = 0;
gdjs.bossfight2Code.GDexplosionObjects1.length = 0;
gdjs.bossfight2Code.GDexplosionObjects2.length = 0;
gdjs.bossfight2Code.GDexplosionObjects3.length = 0;
gdjs.bossfight2Code.GDbosstextObjects1.length = 0;
gdjs.bossfight2Code.GDbosstextObjects2.length = 0;
gdjs.bossfight2Code.GDbosstextObjects3.length = 0;
gdjs.bossfight2Code.GDNewTextObjects1.length = 0;
gdjs.bossfight2Code.GDNewTextObjects2.length = 0;
gdjs.bossfight2Code.GDNewTextObjects3.length = 0;
gdjs.bossfight2Code.GDNewText3Objects1.length = 0;
gdjs.bossfight2Code.GDNewText3Objects2.length = 0;
gdjs.bossfight2Code.GDNewText3Objects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite3Objects3.length = 0;
gdjs.bossfight2Code.GDThePainterObjects1.length = 0;
gdjs.bossfight2Code.GDThePainterObjects2.length = 0;
gdjs.bossfight2Code.GDThePainterObjects3.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite5Objects1.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite5Objects2.length = 0;
gdjs.bossfight2Code.GDNewTiledSprite5Objects3.length = 0;
gdjs.bossfight2Code.GDNewSpriteObjects1.length = 0;
gdjs.bossfight2Code.GDNewSpriteObjects2.length = 0;
gdjs.bossfight2Code.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['bossfight2Code'] = gdjs.bossfight2Code;
