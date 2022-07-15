// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      stage: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v330, v331, v332, v333, v341] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v330, v331, v332, v333, v366] = svs;
            return (await ((async () => {
              
              
              return stdlib.checkedBigNumberify('./index.rsh:49:19:decimal', stdlib.UInt_max, '1');}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v330, v331, v332, v422, v429] = svs;
            return (await ((async () => {
              
              
              return stdlib.checkedBigNumberify('./index.rsh:49:19:decimal', stdlib.UInt_max, '1');}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v330, v331, v332, v333, v359, v366] = svs;
            return (await ((async () => {
              
              
              return stdlib.checkedBigNumberify('./index.rsh:31:19:decimal', stdlib.UInt_max, '0');}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc5],
      3: [ctc0, ctc1, ctc2, ctc2, ctc5],
      6: [ctc0, ctc1, ctc2, ctc2, ctc5],
      7: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v320 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v321 = [v320];
  const v325 = stdlib.protect(ctc2, interact.howManyWhitelisted, 'for Admin\'s interact field howManyWhitelisted');
  const v326 = stdlib.protect(ctc3, interact.tokenID, 'for Admin\'s interact field tokenID');
  const v327 = stdlib.protect(ctc2, interact.tokenQuantity, 'for Admin\'s interact field tokenQuantity');
  
  const txn1 = await (ctc.sendrecv({
    args: [v326, v327, v325],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v331, v332, v333], secs: v335, time: v334, didSend: v31, from: v330 } = txn1;
      
      const v336 = v321[stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '0')];
      const v338 = v336[stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '1')];
      const v339 = v336[stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '2')];
      const v340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v338, v339];
      const v341 = stdlib.Array_set(v321, stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '0'), v340);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v331
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v331, v332, v333], secs: v335, time: v334, didSend: v31, from: v330 } = txn1;
  const v336 = v321[stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '0')];
  const v338 = v336[stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '1')];
  const v339 = v336[stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '2')];
  const v340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v338, v339];
  const v341 = stdlib.Array_set(v321, stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, '0'), v340);
  ;
  ;
  const v343 = stdlib.mul(v332, v333);
  
  const txn2 = await (ctc.sendrecv({
    args: [v330, v331, v332, v333, v341],
    evt_cnt: 0,
    funcNum: 1,
    lct: v334,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0'), [[v343, v331]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v346, time: v345, didSend: v40, from: v344 } = txn2;
      
      const v347 = stdlib.mul(v332, v333);
      ;
      const v348 = v341[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0')];
      const v349 = v348[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0')];
      const v350 = stdlib.add(v349, v347);
      const v353 = v348[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '1')];
      const v354 = v348[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '2')];
      const v355 = [v350, v353, v354];
      const v356 = stdlib.Array_set(v341, stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0'), v355);
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: v331
        });
      
      const v359 = stdlib.checkedBigNumberify('./index.rsh:35:24:decimal', stdlib.UInt_max, '0');
      const v360 = v345;
      const v366 = v356;
      
      if (await (async () => {
        const v375 = stdlib.lt(v359, v333);
        
        return v375;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc3, ctc2, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v346, time: v345, didSend: v40, from: v344 } = txn2;
  const v347 = stdlib.mul(v332, v333);
  ;
  const v348 = v341[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0')];
  const v349 = v348[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0')];
  const v350 = stdlib.add(v349, v347);
  const v353 = v348[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '1')];
  const v354 = v348[stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '2')];
  const v355 = [v350, v353, v354];
  const v356 = stdlib.Array_set(v341, stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, '0'), v355);
  ;
  const v357 = stdlib.addressEq(v330, v344);
  stdlib.assert(v357, {
    at: './index.rsh:29:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:30:23:application',
    fs: ['at ./index.rsh:30:23:application call to [unknown function] (defined at: ./index.rsh:30:23:function exp)', 'at ./index.rsh:30:23:application call to "liftedInteract" (defined at: ./index.rsh:30:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v359 = stdlib.checkedBigNumberify('./index.rsh:35:24:decimal', stdlib.UInt_max, '0');
  let v360 = v345;
  let v366 = v356;
  
  while (await (async () => {
    const v375 = stdlib.lt(v359, v333);
    
    return v375;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v387], secs: v389, time: v388, didSend: v117, from: v386 } = txn3;
    undefined /* setApiDetails */;
    const v391 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v386), null);
    let v392;
    switch (v391[0]) {
      case 'None': {
        const v393 = v391[1];
        v392 = false;
        
        break;
        }
      case 'Some': {
        const v394 = v391[1];
        v392 = true;
        
        break;
        }
      }
    const v395 = v392 ? false : true;
    stdlib.assert(v395, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:41:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:5:application call to [unknown function] (defined at: ./index.rsh:41:15:function exp)'],
      msg: null,
      who: 'Admin'
      });
    ;
    const v397 = null;
    await txn3.getOutput('UserAPI_submit', 'v397', ctc0, v397);
    await stdlib.mapSet(map0, v386, null);
    const v403 = stdlib.add(v359, stdlib.checkedBigNumberify('./index.rsh:45:39:decimal', stdlib.UInt_max, '1'));
    const cv359 = v403;
    const cv360 = v388;
    const cv366 = v366;
    
    v359 = cv359;
    v360 = cv360;
    v366 = cv366;
    
    continue;
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v411], secs: v413, time: v412, didSend: v169, from: v410 } = txn3;
  undefined /* setApiDetails */;
  const v415 = stdlib.addressEq(v410, v330);
  stdlib.assert(v415, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:3:application call to [unknown function] (defined at: ./index.rsh:53:13:function exp)'],
    msg: null,
    who: 'Admin'
    });
  ;
  const v417 = null;
  await txn3.getOutput('AdminAPI_disburse', 'v417', ctc0, v417);
  let v422 = v333;
  let v423 = v412;
  let v429 = v366;
  
  while (await (async () => {
    const v438 = stdlib.gt(v422, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0'));
    
    return v438;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v449], secs: v451, time: v450, didSend: v243, from: v448 } = txn4;
    undefined /* setApiDetails */;
    const v453 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v448), null);
    let v454;
    switch (v453[0]) {
      case 'None': {
        const v455 = v453[1];
        v454 = false;
        
        break;
        }
      case 'Some': {
        const v456 = v453[1];
        v454 = true;
        
        break;
        }
      }
    stdlib.assert(v454, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:62:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:5:application call to [unknown function] (defined at: ./index.rsh:62:15:function exp)'],
      msg: null,
      who: 'Admin'
      });
    ;
    const v458 = null;
    await txn4.getOutput('UserAPI_claim', 'v458', ctc0, v458);
    await stdlib.mapSet(map0, v448, undefined /* Nothing */);
    const v464 = v429[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0')];
    const v465 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0')];
    const v469 = stdlib.sub(v465, v332);
    const v472 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '1')];
    const v473 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '2')];
    const v474 = [v469, v472, v473];
    const v475 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0'), v474);
    ;
    const v476 = stdlib.sub(v422, stdlib.checkedBigNumberify('./index.rsh:67:33:decimal', stdlib.UInt_max, '1'));
    const cv422 = v476;
    const cv423 = v450;
    const cv429 = v475;
    
    v422 = cv422;
    v423 = cv423;
    v429 = cv429;
    
    continue;
    
    }
  const v477 = v429[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
  const v478 = v477[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  
  
  };
export async function _AdminAPI_disburse3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminAPI_disburse3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminAPI_disburse3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v330, v331, v332, v333, v366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc4, ctc4, ctc7]);
  const v404 = ctc.selfAddress();
  const v406 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:52:3:application',
    fs: ['at ./index.rsh:52:3:application call to [unknown function] (defined at: ./index.rsh:52:3:function exp)'],
    msg: 'in',
    who: 'AdminAPI_disburse'
    });
  
  const v408 = stdlib.addressEq(v404, v330);
  stdlib.assert(v408, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:3:application call to [unknown function] (defined at: ./index.rsh:53:13:function exp)'],
    msg: null,
    who: 'AdminAPI_disburse'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v331, v332, v333, v366, v406],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:3:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v411], secs: v413, time: v412, didSend: v169, from: v410 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "AdminAPI_disburse"
        });
      ;
      const v417 = null;
      const v418 = await txn1.getOutput('AdminAPI_disburse', 'v417', ctc0, v417);
      
      const v673 = v333;
      const v675 = v366;
      const v676 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0'));
      if (v676) {
        sim_r.isHalt = false;
        }
      else {
        const v677 = v366[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
        const v678 = v677[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v330,
          tok: v331
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v331
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v411], secs: v413, time: v412, didSend: v169, from: v410 } = txn1;
  undefined /* setApiDetails */;
  const v415 = stdlib.addressEq(v410, v330);
  stdlib.assert(v415, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:52:3:application call to [unknown function] (defined at: ./index.rsh:53:13:function exp)'],
    msg: null,
    who: 'AdminAPI_disburse'
    });
  ;
  const v417 = null;
  const v418 = await txn1.getOutput('AdminAPI_disburse', 'v417', ctc0, v417);
  stdlib.protect(ctc0, await interact.out(v411, v418), {
    at: './index.rsh:52:3:application',
    fs: ['at ./index.rsh:52:3:application call to [unknown function] (defined at: ./index.rsh:52:3:function exp)', 'at ./index.rsh:54:5:application call to "k_" (defined at: ./index.rsh:52:3:function exp)'],
    msg: 'out',
    who: 'AdminAPI_disburse'
    });
  
  const v673 = v333;
  const v675 = v366;
  const v676 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0'));
  if (v676) {
    return;
    }
  else {
    const v677 = v366[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
    const v678 = v677[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
    ;
    return;
    }
  
  
  };
export async function _UserAPI_claim6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_claim6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_claim6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v330, v331, v332, v422, v429] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3, ctc4, ctc4, ctc7]);
  const v439 = ctc.selfAddress();
  const v441 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:61:5:application',
    fs: ['at ./index.rsh:61:5:application call to [unknown function] (defined at: ./index.rsh:61:5:function exp)'],
    msg: 'in',
    who: 'UserAPI_claim'
    });
  
  const v443 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v439), null);
  let v444;
  switch (v443[0]) {
    case 'None': {
      const v445 = v443[1];
      v444 = false;
      
      break;
      }
    case 'Some': {
      const v446 = v443[1];
      v444 = true;
      
      break;
      }
    }
  stdlib.assert(v444, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:5:application call to [unknown function] (defined at: ./index.rsh:62:15:function exp)'],
    msg: null,
    who: 'UserAPI_claim'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v331, v332, v422, v429, v441],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v449], secs: v451, time: v450, didSend: v243, from: v448 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "UserAPI_claim"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v448), null);
      ;
      const v458 = null;
      const v459 = await txn1.getOutput('UserAPI_claim', 'v458', ctc0, v458);
      
      await stdlib.simMapSet(sim_r, 0, v448, undefined /* Nothing */);
      const v464 = v429[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0')];
      const v465 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0')];
      const v469 = stdlib.sub(v465, v332);
      const v472 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '1')];
      const v473 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '2')];
      const v474 = [v469, v472, v473];
      const v475 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0'), v474);
      sim_r.txns.push({
        kind: 'from',
        to: v448,
        tok: v331
        });
      const v476 = stdlib.sub(v422, stdlib.checkedBigNumberify('./index.rsh:67:33:decimal', stdlib.UInt_max, '1'));
      const v679 = v476;
      const v681 = v475;
      const v682 = stdlib.gt(v476, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0'));
      if (v682) {
        sim_r.isHalt = false;
        }
      else {
        const v683 = v475[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
        const v684 = v683[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v330,
          tok: v331
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v331
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v449], secs: v451, time: v450, didSend: v243, from: v448 } = txn1;
  undefined /* setApiDetails */;
  const v453 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v448), null);
  let v454;
  switch (v453[0]) {
    case 'None': {
      const v455 = v453[1];
      v454 = false;
      
      break;
      }
    case 'Some': {
      const v456 = v453[1];
      v454 = true;
      
      break;
      }
    }
  stdlib.assert(v454, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:5:application call to [unknown function] (defined at: ./index.rsh:62:15:function exp)'],
    msg: null,
    who: 'UserAPI_claim'
    });
  ;
  const v458 = null;
  const v459 = await txn1.getOutput('UserAPI_claim', 'v458', ctc0, v458);
  stdlib.protect(ctc0, await interact.out(v449, v459), {
    at: './index.rsh:61:5:application',
    fs: ['at ./index.rsh:61:5:application call to [unknown function] (defined at: ./index.rsh:61:5:function exp)', 'at ./index.rsh:63:6:application call to "k" (defined at: ./index.rsh:61:5:function exp)'],
    msg: 'out',
    who: 'UserAPI_claim'
    });
  
  await stdlib.mapSet(map0, v448, undefined /* Nothing */);
  const v464 = v429[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0')];
  const v465 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0')];
  const v469 = stdlib.sub(v465, v332);
  const v472 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '1')];
  const v473 = v464[stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '2')];
  const v474 = [v469, v472, v473];
  const v475 = stdlib.Array_set(v429, stdlib.checkedBigNumberify('./index.rsh:66:40:application', stdlib.UInt_max, '0'), v474);
  ;
  const v476 = stdlib.sub(v422, stdlib.checkedBigNumberify('./index.rsh:67:33:decimal', stdlib.UInt_max, '1'));
  const v679 = v476;
  const v681 = v475;
  const v682 = stdlib.gt(v476, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0'));
  if (v682) {
    return;
    }
  else {
    const v683 = v475[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
    const v684 = v683[stdlib.checkedBigNumberify('./index.rsh:71:19:application', stdlib.UInt_max, '0')];
    ;
    return;
    }
  
  
  };
export async function _UserAPI_submit7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserAPI_submit7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserAPI_submit7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v330, v331, v332, v333, v359, v366] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc7]);
  const v376 = ctc.selfAddress();
  const v378 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:40:5:application',
    fs: ['at ./index.rsh:40:5:application call to [unknown function] (defined at: ./index.rsh:40:5:function exp)'],
    msg: 'in',
    who: 'UserAPI_submit'
    });
  
  const v380 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v376), null);
  let v381;
  switch (v380[0]) {
    case 'None': {
      const v382 = v380[1];
      v381 = false;
      
      break;
      }
    case 'Some': {
      const v383 = v380[1];
      v381 = true;
      
      break;
      }
    }
  const v384 = v381 ? false : true;
  stdlib.assert(v384, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:5:application call to [unknown function] (defined at: ./index.rsh:41:15:function exp)'],
    msg: null,
    who: 'UserAPI_submit'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v330, v331, v332, v333, v359, v366, v378],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v387], secs: v389, time: v388, didSend: v117, from: v386 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "UserAPI_submit"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v386), null);
      ;
      const v397 = null;
      const v398 = await txn1.getOutput('UserAPI_submit', 'v397', ctc0, v397);
      
      await stdlib.simMapSet(sim_r, 0, v386, null);
      const v403 = stdlib.add(v359, stdlib.checkedBigNumberify('./index.rsh:45:39:decimal', stdlib.UInt_max, '1'));
      const v685 = v403;
      const v687 = v366;
      const v688 = stdlib.lt(v403, v333);
      if (v688) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v387], secs: v389, time: v388, didSend: v117, from: v386 } = txn1;
  undefined /* setApiDetails */;
  const v391 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v386), null);
  let v392;
  switch (v391[0]) {
    case 'None': {
      const v393 = v391[1];
      v392 = false;
      
      break;
      }
    case 'Some': {
      const v394 = v391[1];
      v392 = true;
      
      break;
      }
    }
  const v395 = v392 ? false : true;
  stdlib.assert(v395, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:24:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:5:application call to [unknown function] (defined at: ./index.rsh:41:15:function exp)'],
    msg: null,
    who: 'UserAPI_submit'
    });
  ;
  const v397 = null;
  const v398 = await txn1.getOutput('UserAPI_submit', 'v397', ctc0, v397);
  stdlib.protect(ctc0, await interact.out(v387, v398), {
    at: './index.rsh:40:5:application',
    fs: ['at ./index.rsh:40:5:application call to [unknown function] (defined at: ./index.rsh:40:5:function exp)', 'at ./index.rsh:42:6:application call to "k" (defined at: ./index.rsh:40:5:function exp)'],
    msg: 'out',
    who: 'UserAPI_submit'
    });
  
  await stdlib.mapSet(map0, v386, null);
  const v403 = stdlib.add(v359, stdlib.checkedBigNumberify('./index.rsh:45:39:decimal', stdlib.UInt_max, '1'));
  const v685 = v403;
  const v687 = v366;
  const v688 = stdlib.lt(v403, v333);
  if (v688) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function AdminAPI_disburse(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminAPI_disburse expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminAPI_disburse expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _AdminAPI_disburse3(ctcTop, interact);}
  };
export async function UserAPI_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _UserAPI_claim6(ctcTop, interact);}
  };
export async function UserAPI_submit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserAPI_submit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserAPI_submit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _UserAPI_submit7(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`AdminAPI_disburse()byte[0]`, `UserAPI_claim()byte[0]`, `UserAPI_submit()byte[0]`],
    pure: [`stage()uint64`],
    sigs: [`AdminAPI_disburse()byte[0]`, `UserAPI_claim()byte[0]`, `UserAPI_submit()byte[0]`, `stage()uint64`]
    },
  appApproval: `BiAPAAEGAwQIByAoMMnHz9EDnb+j1g7HrKyQAgWgjQYmAwEAAAgAAAAAAAAAASI1ADEYQQRZKWRJIls1ASEFWzUCMRkjEkEACDEAKChmQgQnNhoAF0lBAGUiNQQjNQZJIQoMQAA+SSELDEAALyELEkQ0AUkkDEAAGkkhBgxAAAwhBhJEIQWvNQdCA/tIKjUHQgP0JRJEKjUHQgPrIQoSRClCAD1JIQwMQAAIIQwSRClCAKqB+9SyTBJEKUIBSzYaAhc1BDYaAzYaARdJJQxAAZBJIQ0MQAEuSSQMQAB+JBJEIQY0ARJENARJIhJMNAISEUQoZDUDSTUFNf+ABMnojQw0/1CwMQCIA6NJNf0iVUAABiI1/kIABiM1/kIAADT+FESACAAAAAAAAAGNsCk1BzEAKIABAWY0A1cAIDQDIQdbNAMhCFs0AyEJWzQDgThbIwgyBjQDV0ARQgIXSCQ0ARJENARJIhJMNAISEUQoZEk1A0lJIQdbNf8hCFs1/lc4ETX9STUFNfyABGiSZGM0/FCwMQCIAxZJNfoiVUAABiI1+0IABiM1+0IAADT7RIAIAAAAAAAAAcqwKTUHMQAoKGY0/VcAETX6sSKyATT+shIhBLIQMQCyFDT/shGzNANXACA0/zT+NAMhCVsjCTIGNPoiWzT+CRY0+lcICFA0+lcQAVBCAc4lEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gATImg+7NP5QsDEANP8SRIAIAAAAAAAAAaGwKTUHNP80AyEHWzQDIQhbNAMhCVsyBjQDVzgRQgFzSSMMQAB4IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hB1s1/iEIWzX9IQlbNfxXOBE1+4AEmouRdLA0/TT8CzX6NPtXABE1+TT6NP6IAhs0/zEAEkQ0/zT+NP00/CIyBjT5Ils0+ggWNPlXCAhQNPlXEAFQQgCUSCEOiAHVIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEFWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwgRGvSTX8VwARNfshBa80+1cICFA0+1cQAVA1+iEOiAF+sSKyASKyEiEEshAyCrIUNP+yEbMxADT/FlA0/hZQNP0WUDT6UChLAVcASWdIIzUBMgY1AkIA6DX/Nf41/TX8Nfs1+jX5NP00/AxBACg0+TT6FlA0+xZQNPwWUDT9FlA0/1AoSwFXAFFnSCEGNQEyBjUCQgCqNPk0+hZQNPsWUDT8FlA0/1AoSwFXAElnSCU1ATIGNQJCAIc1/zX+Nf01/DX7Nfo0/SINQQAjNPo0+xZQNPwWUDT9FlA0/1AoSwFXAElnSCQ1ATIGNQJCAFGxIrIBNP9XABEiW7ISIQSyEDT6shQ0+7IRs7EisgEishIhBLIQMgmyFTIKshQ0+7IRs0IAADEZIQ0SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 81,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v331",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v332",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v331",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v332",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v411",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v449",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v387",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v397",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v417",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v458",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "AdminAPI_disburse",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserAPI_claim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UserAPI_submit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v411",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v449",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v387",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620023dc380380620023dc83398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560086200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b611e0880620005d46000396000f3fe6080604052600436106100a55760003560e01c80636da017a0116100615780636da017a01461013a578063832307571461014d578063ab53f2c614610162578063ad9fa3d814610185578063c040e6b814610198578063e2186a08146101ad57005b80631e93b0f1146100ae5780632c10a159146100d257806334a8333e146100e55780633bc5b7bf146100fd5780633ccd06741461012a57806362c496e61461013257005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611779565b6101c0565b6100ed6101f9565b60405190151581526020016100c9565b34801561010957600080fd5b5061011d6101183660046117aa565b610239565b6040516100c991906117dd565b6100ed610265565b6100ed6102a2565b6100ac610148366004611779565b6102e2565b34801561015957600080fd5b506001546100bf565b34801561016e57600080fd5b50610177610317565b6040516100c9929190611850565b6100ac610193366004611779565b6103b4565b3480156101a457600080fd5b506100bf6103e9565b6100ac6101bb366004611779565b610637565b60408051606081018252600080825260208201819052918101919091526101f56101ef368490038401846118fa565b8261066c565b5050565b6000610203611496565b6020818101516000908190526040805160608101825282815292830182905282015261022f82826108a2565b6040015192915050565b604080516060810182526000808252602082018190529181019190915261025f82610aff565b92915050565b600061026f611496565b6020818101516000908190526040805160608101825282815292830182905282015261029b8282610bd7565b5192915050565b60006102ac611496565b602081810151600090819052604080516060810182528281529283018290528201526102d88282610da0565b6020015192915050565b60408051606081018252600080825260208201819052918101919091526101f5610311368490038401846119e0565b826108a2565b60006060600054600280805461032c906119fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610358906119fc565b80156103a55780601f1061037a576101008083540402835291602001916103a5565b820191906000526020600020905b81548152906001019060200180831161038857829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526101f56103e3368490038401846119e0565b82610da0565b6000600160005414156104a657600060028054610405906119fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610431906119fc565b801561047e5780601f106104535761010080835404028352916020019161047e565b820191906000526020600020905b81548152906001019060200180831161046157829003601f168201915b50505050508060200190518101906104969190611b46565b90506104a460006007611045565b505b6003600054141561055a576000600280546104c0906119fc565b80601f01602080910402602001604051908101604052809291908181526020018280546104ec906119fc565b80156105395780601f1061050e57610100808354040283529160200191610539565b820191906000526020600020905b81548152906001019060200180831161051c57829003601f168201915b50505050508060200190518101906105519190611b46565b50600192915050565b60066000541415610574576000600280546104c0906119fc565b600760005414156106285760006002805461058e906119fc565b80601f01602080910402602001604051908101604052809291908181526020018280546105ba906119fc565b80156106075780601f106105dc57610100808354040283529160200191610607565b820191906000526020600020905b8154815290600101906020018083116105ea57829003601f168201915b505050505080602001905181019061061f9190611b62565b50600092915050565b61063460006007611045565b90565b60408051606081018252600080825260208201819052918101919091526101f5610666368490038401846119e0565b82610bd7565b61067c600160005414600c611045565b815161069790158061069057508251600154145b600d611045565b6000808055600280546106a9906119fc565b80601f01602080910402602001604051908101604052809291908181526020018280546106d5906119fc565b80156107225780601f106106f757610100808354040283529160200191610722565b820191906000526020600020905b81548152906001019060200180831161070557829003601f168201915b505050505080602001905181019061073a9190611b46565b90506107446114c5565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a18160600151826040015161079f9190611c0a565b81526107ad34156009611045565b8051608083015151516107c09190611c3f565b6020828101805192909252608084018051518201518351830152515160409081015192519215159201919091528201518151610809916108029133919061106b565b600a611045565b8151610821906001600160a01b03163314600b611045565b6108296114fd565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835190910152606080850151835190910152808201805160009081905290514390830152608085015191840151610889929190611083565b60208201516040015261089b816110f7565b5050505050565b6108b26007600054146018611045565b81516108cd9015806108c657508251600154145b6019611045565b6000808055600280546108df906119fc565b80601f016020809104026020016040519081016040528092919081815260200182805461090b906119fc565b80156109585780601f1061092d57610100808354040283529160200191610958565b820191906000526020600020905b81548152906001019060200180831161093b57829003601f168201915b50505050508060200190518101906109709190611b62565b6040805160208101909152600081529091507f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe33856040516109b3929190611c57565b60405180910390a160006109c633610aff565b5160018111156109d8576109d86117c7565b14156109e75760008152610a0f565b60016109f233610aff565b516001811115610a0457610a046117c7565b1415610a0f57600181525b8051610a2a90610a20576001610a23565b60005b6016611045565b610a3634156017611045565b604051600081527f5d44e173bce3a8068183aa57bd4831933cf6aab0d4fe0d41b35cf723c9b1fbea9060200160405180910390a16000604084810182905233825260046020529020805462ff00ff19166001179055610a936114fd565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401518251909101526080830151610ada90600190611c3f565b602080830180519290925281514391015260a084015190516040015261089b816110f7565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610b4b57610b4b6117c7565b1415610bc8576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b8c57610b8c6117c7565b6001811115610b9d57610b9d6117c7565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610be76003600054146010611045565b8151610c02901580610bfb57508251600154145b6011611045565b600080805560028054610c14906119fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610c40906119fc565b8015610c8d5780601f10610c6257610100808354040283529160200191610c8d565b820191906000526020600020905b815481529060010190602001808311610c7057829003601f168201915b5050505050806020019051810190610ca59190611b46565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353384604051610cd8929190611c57565b60405180910390a18051610cf8906001600160a01b03163314600e611045565b610d043415600f611045565b604051600081527f6833f4930bb46cb32d43d9587a933ad5f1186cd95507edcca9b6efff8a4e39f99060200160405180910390a160008252610d44611536565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060840151828401805191909152805143930192909252608084015191510152610d9a816111ff565b50505050565b610db06006600054146014611045565b8151610dcb901580610dc457508251600154145b6015611045565b600080805560028054610ddd906119fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610e09906119fc565b8015610e565780601f10610e2b57610100808354040283529160200191610e56565b820191906000526020600020905b815481529060010190602001808311610e3957829003601f168201915b5050505050806020019051810190610e6e9190611b46565b9050610e7861155f565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653385604051610ea9929190611c57565b60405180910390a16000610ebc33610aff565b516001811115610ece57610ece6117c7565b1415610edd5760008152610f05565b6001610ee833610aff565b516001811115610efa57610efa6117c7565b1415610f0557600181525b8051610f12906012611045565b610f1e34156013611045565b604051600081527f76bece6479bdc33762c257049810f11b18e4399c066fbedcfa2be71f51347faf9060200160405180910390a16000602084810182905233825260049052604090819020805462ffffff1916905582015160808301515151610f879190611c81565b6020828101805192909252608084018051518201518351830152515160409081015192519215159281019290925283015190830151610fc89190339061129c565b610fd0611536565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152606083015161100b90600190611c81565b6020808301805192909252905143908201526080840151908301516110339190600090611083565b60208201516040015261089b816111ff565b816101f55760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000611079838530856112b0565b90505b9392505050565b61108b611599565b60005b60018110156110d7578481600181106110a9576110a9611c29565b60200201518282600181106110c0576110c0611c29565b6020020152806110cf81611c98565b91505061108e565b50818184600181106110eb576110eb611c29565b60200201529392505050565b805160600151602082015151101561119b576111116115e4565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015283516060908101519084015281840180515160808501525181015160a08401526007600055436001555161117291839101611cf1565b6040516020818303038152906040526002908051906020019061119692919061162c565b505050565b6111a36116b0565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151908401528184015181015160808401526003600055436001555161117291839101611d8b565b50565b60208101515115611267576112126116b0565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015281840180515160608501525181015160808401526006600055436001555161117291839101611d8b565b805160208082015191519083015160400151515161128692919061129c565b600080805560018190556111fc906002906116f1565b6112a783838361138a565b61119657600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161131791611d99565b60006040518083038185875af1925050503d8060008114611354576040519150601f19603f3d011682016040523d82523d6000602084013e611359565b606091505b509150915061136a8282600161145b565b508080602001905181019061137f9190611db5565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916113e991611d99565b60006040518083038185875af1925050503d8060008114611426576040519150601f19603f3d011682016040523d82523d6000602084013e61142b565b606091505b509150915061143c8282600261145b565b50808060200190518101906114519190611db5565b9695505050505050565b6060831561146a57508161107c565b82511561147a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611062565b6040518060400160405280600081526020016114c060405180602001604052806000151581525090565b905290565b6040518060400160405280600081526020016114c0604051806060016040528060008152602001600081526020016000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b81526020016114c061172b565b6040805160a0810182526000918101828152606082018390526080820192909252908190611529565b60405180604001604052806000151581526020016114c0604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001905b6115ce604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816115a85790505090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016114c0611599565b828054611638906119fc565b90600052602060002090601f01602090048101928261165a57600085556116a0565b82601f1061167357805160ff19168380011785556116a0565b828001600101855582156116a0579182015b828111156116a0578251825591602001919060010190611685565b506116ac92915061174c565b5090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016114c0611599565b5080546116fd906119fc565b6000825580601f1061170d575050565b601f0160209004906000526020600020908101906111fc919061174c565b604051806060016040528060008152602001600081526020016114c0611599565b5b808211156116ac576000815560010161174d565b60006040828403121561177357600080fd5b50919050565b60006040828403121561178b57600080fd5b61107c8383611761565b6001600160a01b03811681146111fc57600080fd5b6000602082840312156117bc57600080fd5b813561107c81611795565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061180257634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b8381101561183f578181015183820152602001611827565b83811115610d9a5750506000910152565b8281526040602082015260008251806040840152611875816060850160208701611824565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156118c3576118c361188a565b60405290565b6040516060810167ffffffffffffffff811182821017156118c3576118c361188a565b80151581146111fc57600080fd5b60006040828403121561190c57600080fd5b6040516040810181811067ffffffffffffffff8211171561192f5761192f61188a565b604052823581526020830135611944816118ec565b60208201529392505050565b600081830360408082121561196457600080fd5b805181810167ffffffffffffffff82821081831117156119865761198661188a565b818452829550863583526020601f19860112156119a257600080fd5b8351945060208501915084821081831117156119c0576119c061188a565b509091526020840135906119d3826118ec565b9082526020015292915050565b6000604082840312156119f257600080fd5b61107c8383611950565b600181811c90821680611a1057607f821691505b6020821081141561177357634e487b7160e01b600052602260045260246000fd5b600082601f830112611a4257600080fd5b611a4a6118a0565b80606080850186811115611a5d57600080fd5b855b81811015611aae57828189031215611a775760008081fd5b611a7f6118c9565b8151815260208083015181830152604080840151611a9c816118ec565b90830152908652909401938201611a5f565b50919695505050505050565b600060e08284031215611acc57600080fd5b60405160a0810181811067ffffffffffffffff82111715611aef57611aef61188a565b80604052508091508251611b0281611795565b81526020830151611b1281611795565b806020830152506040830151604082015260608301516060820152611b3a8460808501611a31565b60808201525092915050565b600060e08284031215611b5857600080fd5b61107c8383611aba565b60006101008284031215611b7557600080fd5b60405160c0810181811067ffffffffffffffff82111715611b9857611b9861188a565b6040528251611ba681611795565b81526020830151611bb681611795565b80602083015250604083015160408201526060830151606082015260808301516080820152611be88460a08501611a31565b60a08201529392505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611c2457611c24611bf4565b500290565b634e487b7160e01b600052603260045260246000fd5b60008219821115611c5257611c52611bf4565b500190565b6001600160a01b03831681526060810161107c602083018480518252602090810151511515910152565b600082821015611c9357611c93611bf4565b500390565b6000600019821415611cac57611cac611bf4565b5060010190565b8060005b6001811015610d9a578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101611cb7565b60006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a0830151611d4460a0840182611cb3565b5092915050565b60018060a01b0380825116835280602083015116602084015250604081015160408301526060810151606083015260808101516111966080840182611cb3565b60e0810161025f8284611d4b565b60008251611dab818460208701611824565b9190910192915050565b600060208284031215611dc757600080fd5b815161107c816118ec56fea26469706673582212203fddf35458dfa7e47787c57f49953486cc91b550167760e19f02801042e096de64736f6c634300080c0033`,
  BytecodeLen: 9180,
  Which: `oD`,
  version: 7,
  views: {
    stage: `stage`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:50:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:72:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:59:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:38:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "AdminAPI_disburse": AdminAPI_disburse,
  "UserAPI_claim": UserAPI_claim,
  "UserAPI_submit": UserAPI_submit
  };
export const _APIs = {
  AdminAPI: {
    disburse: AdminAPI_disburse
    },
  UserAPI: {
    claim: UserAPI_claim,
    submit: UserAPI_submit
    }
  };
