//Aumento de velocidad dependiendo de la polaridad
function speedAugment(actualSpeed) {
    if(Math.sign(actualSpeed) == 1){
        return actualSpeed += ballConsts.speedAugmentx;
    }else{
        return actualSpeed -= ballConsts.speedAugmentx;
    }
}