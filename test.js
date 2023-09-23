// const hard = [
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/bCfmrP.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/SmRmc5.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/q05mc6.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/ULImrS.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/uj4mc7.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/mvymc8.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/qPHg5j.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/uw3g5k.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/lRVg5l.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/7b9got.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QK_Jk/0LbsJL.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QN_J3/X9psOr.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QR_MB/OQOsES.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QQ_Ld/aZlsDc.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jl/JbQsG2.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QK_Jk/buXsJM.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QL_J4/1G7BxIu.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QP_K5/UysBeqo.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QP_K5/lLBBeqp.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QP_K5/BvIBeqq.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QM_Kc/4KXQ9t.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QP_K5/LbUBeqr.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QP_K5/7VTBcD5.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jh/SNXOoa.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QQ_Lg/DFEh94.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QK_Jn/RaeBKFY.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QM_Kc/63POTo.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QM_Kc/eRmOTp.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/sUPd1P.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/Wn8d1R.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/H0Rd1S.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/Z5yeNI.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/AFceNJ.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/yo3eNK.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/FGAcXZ.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/GircXa.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/zbocXb.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/wfmcBe.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/Bs3cXc.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/y97cXd.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/H7OcBa.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/BrlcXV.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/LAMcXW.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/wtvcXX.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/RRacBb.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/5rCcBc.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/raKcBV.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/l8ucXQ.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/AiqcXR.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/Kd4cXS.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/1aacBW.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/DFhcBX.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/ksFagj.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/RtgaLI.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/F8nagl.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/QACaLJ.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/Szxago.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/9lBaLK.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/B3HaCV.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/9vYaCW.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/xAmaCX.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/TqZaXw.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/jVWaXx.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/Q5gaXy.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/F5XaXo.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/X8uaXp.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/jIGaCR.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/v4TaXq.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/WkIaCS.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/59naXr.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/3COaAH.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/ljwZpB.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/qFSZpC.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/JRbaAI.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/HSLZpD.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/3PAaAJ.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/gPlZ5v.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/BZuZki.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/ai8Zkk.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/HsKZkl.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/mwMZkn.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/yZ4Zko.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/QUcZ5P.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/zPqZ5Q.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/VO8Z5R.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/VtQZ5S.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/LHEZkA.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/4uVZkC.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/3e7Z5B.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/OSzZ5C.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/MfoZju.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/zZQZjv.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/ylPZjw.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/IOkZjx.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/Yn2ZpN.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/PDsZpO.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/qmxZUT.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/mwdZpQ.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/92AZpR.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/dRxZUX.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/b0tZT0.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/P1nZo4.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/qKjZT1.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/WhQZo6.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/gI7ZT2.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/GXKZo8.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/Pv3ZoY.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/VP5ZTa.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/guuZoa.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/HDnZTd.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/b4CZTe.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/Q5LZTf.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/mHoZZE.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/8LeZZF.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/FxVZEf.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/RJyZEg.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QJ_Jq/Uf5ZEh.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d18-a.sdn.cz/d_18/c_img_QI_Jk/XQjZZG.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff",
// ];

// const imagesUrls = [];

// const delimiter =
//   "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff";

// let middleArray = [];
// for (let i = 0; i < hard.length; i++) {
//   const curImage = hard[i];
//   // console.log(curImage);
//   if (curImage === delimiter) {
//     imagesUrls.push(middleArray);
//     middleArray = [];
//   } else {
//     // console.log(middleArray);
//     middleArray.push(curImage);
//   }
//   // const element = array[i];
// }

// console.log(imagesUrls);

const db = require("./server/db");

db.query(
  "INSERT INTO sreality (price, locality, description, images) VALUES ('2 926 200 CZK', 'Bijela (Бијела), Černá Hora', 'For sale apartment 2+kt 47 m²', $1);",
  [
    [
      "https://d18-a.sdn.cz/d_18/c_img_QI_Ji/fN25Ur.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QJ_Jo/dxx5Ii.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
    ],
  ]
);

// ['https://d18-a.sdn.cz/d_18/c_img_QP_K2/W0yBU9C.jpeg?fl=res,400,300,3|shr,,20|jpg,90']

// ]
