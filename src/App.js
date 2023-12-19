import React, { useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Error from 'components/error/Error';
import Main from 'sample/Main';
import EvlRsltRegPage from 'pages/biz/agrem/evlRsltReg/EvlRsltRegPage';
import AgremChgDtlAplyPage from 'pages/biz/evl/agremChgDtlAply/AgremChgDtlAplyPage';
import M0000 from 'pages/mg/bm/bm/bm/bsnsSeManage/BsnsSeManagePage';
import M0003 from 'pages/mg/bm/bm/bc/bsnsBudgetManage/BsnsBudgetManagePage';
import M0004 from 'pages/mg/bm/bm/bc/bsnsExpitmTaxitm/BsnsExpitmTaxitmPage';
import M0005 from 'pages/mg/bm/pm/pa/pblancManage/PblancManagePage';
import M0007 from 'pages/mg/bm/pm/pa/pblancUpdt/PblancUpdtPage';
import M0008 from 'pages/mg/bm/pm/pc/pblancChartrManage/PblancChartrManagePage';
import M0009 from 'pages/mg/bm/pm/pc/pblancPartcptnTrget/PblancPartcptnTrgetPage';
import M0010 from 'pages/mg/bm/pm/pc/pblancPvltrtAddpnt/PblancPvltrtAddpntPage';
import M0011 from 'pages/mg/bm/pm/pc/pblancRstrctCnd/PblancRstrctCndPage';
import M0012 from 'pages/mg/bm/pm/pc/pblancFxManage/PblancFxManagePage';
import M0013 from 'pages/mg/bm/pm/pc/pblancJobProcss/PblancJobProcssPage';
import M0014 from 'pages/mg/bm/pm/pc/pblancFormatDfn/PblancFormatDfnPage';
import M0016 from 'pages/mg/bm/pm/pc/pblancRsltIx/PblancRsltIxPage';
import M0017 from 'pages/mg/bm/pm/pc/pblancAditIem/PblancAditIemPage';
import M0018 from 'pages/mg/bm/mm/se/suplyEntrprsInqire/SuplyEntrprsInqirePage';
import M0019 from 'pages/mg/bm/mm/se/suplyEntrprsPopup/SuplyEntrprsPopupPage';
import M0020 from 'pages/mg/bm/mm/se/suplyEntrprsBass/SuplyEntrprsBassPage';
import M0021 from 'pages/mg/bm/mm/se/suplyEntrprsInfo/SuplyEntrprsInfoPage';
import M0022 from 'pages/mg/bm/mm/se/suplyEntrprsPrtn/SuplyEntrprsPrtnPage';
import M0023 from 'pages/mg/bm/mm/se/evlOpinionPopup/EvlOpinionPopupPage';
import M0024 from 'pages/mg/bm/mm/se/suplyEntrprsAcmslt/SuplyEntrprsAcmsltPage';
import M0025 from 'pages/mg/bm/mm/sm/suplyEntrprsMtchg/SuplyEntrprsMtchgPage';
import M0027 from 'pages/mg/bm/mm/sm/excelDwld/ExcelDwldPage';
import M0028 from 'pages/mg/bm/mm/ss/suplyMtchgStats/SuplyMtchgStatsPage';
import M0035 from 'pages/mg/bm/im/ir/insttRcritManage/InsttRcritManagePage';
import M0036 from 'pages/mg/bm/im/ir/insttRcritRegist/InsttRcritRegistPage';
import M0038 from 'pages/mg/bm/im/ip/insttRcritProgrs/InsttRcritProgrsPage';
import M0039 from 'pages/mg/bm/im/se/insttSlctnEvl/InsttSlctnEvlPage';
import M0040 from 'pages/mg/bm/im/se/insttRegistPopup/InsttRegistPopupPage';
import M0041 from 'pages/mg/bm/im/se/insttAsignPopup/InsttAsignPopupPage';
import M0042 from 'pages/mg/bm/im/sr/insttResultRegist/InsttResultRegistPage';
import M0043 from 'pages/mg/bm/im/sr/insttResultPopup/InsttResultPopupPage';
import M0044 from 'pages/mg/bm/im/sr/insttCmitPopup/InsttCmitPopupPage';
import M0045 from 'pages/mg/bm/ia/ia/insttAgremExmnt/InsttAgremExmntPage';
import M0047 from 'pages/mg/bm/ia/ic/insttAgremCncls/InsttAgremCnclsPage';
import M0050 from 'pages/mg/bm/di/di/docIssuSttus/DocIssuSttusPage';

import M0052 from 'pages/mg/tr/tr/tr/taskRceptSttus/TaskRceptSttusPage';
import M0053 from 'pages/mg/tr/tr/tr/excBsnsDetail/ExcBsnsDetailPage';

import M0067 from 'pages/mg/tr/tr/bm/bsnsManageInqire/BsnsManageInqirePage';

import M0079 from 'pages/mg/tr/tr/pr/propseRequstInqire/PropseRequstInqirePage';
import M0080 from 'pages/mg/tr/tr/pr/propseRequstDetail/PropseRequstDetailPage';
import M0081 from 'pages/mg/tr/tr/pi/propseInqire/PropseInqirePage';
import M0083 from 'pages/mg/tr/tr/bt/bsnsTaskSttus/BsnsTaskSttusPage';

import M0085 from 'pages/mg/tr/tr/tp/taskProgrsSttus/TaskProgrsSttusPage';

import M0087 from 'pages/mg/tr/re/re/rqisitExmnt/RqisitExmntPage';
import M0088 from 'pages/mg/tr/re/re/excBsnsDetail/ExcBsnsDetailPage';
import M0101 from 'pages/mg/tr/re/ie/indcSportSttus/IndcSportSttusPage';
import M0102 from 'pages/mg/tr/se/se/sptEvlPlan/SptEvlPlanPage';

import M0114 from 'pages/mg/tr/se/sr/sptEvlRegist/SptEvlRegistPage';

import M0118 from 'pages/mg/tr/te/ec/techEvlCmit/TechEvlCmitPage';
import M0127 from 'pages/mg/tr/te/er/techResultRegist/TechResultRegistPage';
import M0135 from 'pages/mg/tr/te/te/techResultNtce/TechResultNtcePage';
import M0136 from 'pages/mg/tr/te/te/techResultDetail/TechResultDetailPage';
import M0137 from 'pages/mg/tr/sc/sc/sptCnfirmFoundng/SptCnfirmFoundngPage';
import M0149 from 'pages/mg/tr/sc/sr/sptResultRegist/SptResultRegistPage';
import M0151 from 'pages/mg/tr/sc/sr/sptExmntPopup/SptExmntPopupPage';
import M0153 from 'pages/mg/tr/cc/pc/prmpcInsttAppn/PrmpcInsttAppnPage';
import M0155 from 'pages/mg/tr/cc/pe/prmpcCalcExmnt/PrmpcCalcExmntPage';
import M0160 from 'pages/mg/tr/cc/ps/prmpcSprvisnExmnt/PrmpcSprvisnExmntPage';
import M0161 from 'pages/mg/tr/cc/ps/presentnSttus/PresentnSttusPage';
import M0164 from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/DlbrtMtrRegistPage';
import M0170 from 'pages/mg/tr/sc/dr/dlbrtResultRegist/DlbrtResultRegistPage';
import M0175 from 'pages/mg/am/ci/ci/cnfirmInsttList/CnfirmInsttListPage';
import M0179 from 'pages/mg/am/am/ap/agremPlanList/AgremPlanListPage';
import M0181 from 'pages/mg/am/am/ac/agremCnclsList/AgremCnclsListPage';
import M0182 from 'pages/mg/am/am/ac/agremCnclsDetail/AgremCnclsDetailPage';
import M0187 from 'pages/mg/am/am/am/agremChangeList/AgremChangeListPage';
import M0188 from 'pages/mg/am/am/am/agremChangeRcept/AgremChangeRceptPage';
import M0189 from 'pages/mg/am/am/am/agremChangeConfm/AgremChangeConfmPage';
import M0191 from 'pages/mg/am/wr/rp/reprtPresentnList/ReprtPresentnListPage';
import M0192 from 'pages/mg/am/wr/rp/reprtPresentnDetail/ReprtPresentnDetailPage';
import M0193 from 'pages/mg/am/wr/rr/reprtRceptList/ReprtRceptListPage';
import M0194 from 'pages/mg/am/wr/rr/reprtRceptDetail/ReprtRceptDetailPage';
import M0195 from 'pages/mg/am/wr/wr/wctReqstList/WctReqstListPage';
import M0196 from 'pages/mg/am/wr/wr/wctReqstDetail/WctReqstDetailPage';
import M0198 from 'pages/mg/am/wr/wc/wctPymntList/WctPymntListPage';
import M0200 from 'pages/mg/am/wr/rc/rcmsDtaList/RcmsDtaListPage';

import M0207 from 'pages/mg/rm/mc/rp/reprtPresentnList/ReprtPresentnListPage';

import M0209 from 'pages/mg/rm/mc/rr/reprtRceptList/ReprtRceptListPage';

import M0227 from 'pages/mg/rm/lc/rp/reprtPresentnList/ReprtPresentnListPage';

import M0229 from 'pages/mg/rm/lc/rr/reprtRceptList/ReprtRceptListPage';

import M0432 from 'pages/mg/sm/em/em/evlRegistBass/EvlRegistBassPage';
import M0433 from 'pages/mg/sm/em/em/evlRegistComposition/EvlRegistCompositionPage';
import M0434 from 'pages/mg/sm/em/em/evlTableEx/EvlTableExPage';
import M0435 from 'pages/mg/sm/em/em/evlUpdtBass/EvlUpdtBassPage';
import M0436 from 'pages/mg/sm/em/em/evlUpdtComposition/EvlUpdtCompositionPage';
import M0437 from 'pages/mg/sm/em/em/evlIxInqire/EvlIxInqirePage';
import M0438 from 'pages/mg/sm/em/em/ixAswperInqire/IxAswperInqirePage';
import M0439 from 'pages/mg/sm/em/em/upperQesitmInqire/UpperQesitmInqirePage';

import M0450 from 'pages/mg/bm/im/ie/insttRcritExmnt/InsttRcritExmntPage';
import M0451 from 'pages/mg/rm/ed/ed/excDiaryCnstnt/ExcDiaryCnstntPage';
import M0452 from 'pages/mg/rm/ed/ca/anytmChckDgnss/AnytmChckDgnssPage';

import 'App.css';
import SamplePage from 'pages/sample/SamplePage';
import CmAplyAsmtWhol from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtWhol';
import SprvisnResultListPage from 'pages/mg/rm/lc/sr/sprvisnResultList/SprvisnResultListPage';

import M0440 from 'pages/mg/em/le/rp/reprtPresentnList/ReprtPresentnListPage';
import M0441 from 'pages/mg/em/le/rr/reprtRceptList/ReprtRceptListPage';

import M0442 from 'pages/mg/em/or/or/objcReqstRcept/ObjcReqstRceptPage';
import M0443 from 'pages/mg/em/or/op/objcProcessSttus/ObjcProcessSttusPage';

import M0444 from 'pages/mg/rs/rm/rm/rsltIxList/RsltIxListPage';

import M0801 from 'pages/smg/sm/em/em/evlIxManage/EvlIxManagePage';

import U0001 from 'pages/usr/my/em/eo/evlOprtn/EvlOprtnPage';
import U0002 from 'pages/usr/my/em/er/evlResultRegist/EvlResutlRegistPage';
import U0003 from 'pages/usr/my/em/cr/chckResultRegist/ChckResultRegistPage';
import U0004 from 'pages/usr/my/em/em/evlMfcmmFx/EvlMfcmmFxPage';
import U0005 from 'pages/usr/my/em/ep/evlPartcptnRegist/EvlPartcptnRegistPage';
import U0006 from 'pages/usr/bm/tr/tr/smsDspth/SmsDspthPage';
import U0007 from 'pages/usr/bm/tr/tr/taskReqstDetail/TaskReqstDetailPage';

import U0008 from 'pages/usr/bm/or/or/objcReqst/ObjcReqstPage';

import U0009 from 'pages/usr/bg/ba/ma/bsnsPblanc/BsnsPblancPage';

import U0010 from 'pages/usr/bm/cr/cr/chckResultInqire/ChckResultInqirePage';

import U0011 from 'pages/usr/bm/ie/ie/indcEntrprsSearch/IndcEntrprsSearchPage';
import U0012 from 'pages/usr/bm/ie/im/indcEntrprsManage/IndcEntrprsManagePage';
import U0013 from 'pages/usr/bm/ie/ir/indcMtchgResult/IndcMtchgResultPage';
import U0014 from 'pages/usr/bm/ie/br/bsnsActplnRequst/BsnsActplnRequstPage';
import U0015 from 'pages/usr/bm/ie/pm/prpslManage/PrpslManagePage';
import U0016 from 'pages/usr/bm/ie/ps/propseSttus/PropseSttusPage';

import U0017 from 'pages/usr/bm/sm/se/suplyEntrprsSearch/SuplyEntrprsSearchPage';
import U0018 from 'pages/usr/bm/sm/sm/suplyEntrprsManage/SuplyEntrprsManagePage';
import U0019 from 'pages/usr/bm/sm/sr/suplyEntrprsMtchg/SuplyEntrprsMtchgPage';
import U0020 from 'pages/usr/bm/sm/ba/bsnsActplnExmnt/BsnsActplnExmntPage';

import U0021 from 'pages/usr/bm/pc/pc/prmpcCalcPresentn/PrmpcCalcPresentnPage';
import U0022 from 'pages/usr/bm/pc/pe/prmpcCalcExmnt/PrmpcCalcExmntPage';
import U0023 from 'pages/usr/bm/pc/ps/prmpcSprvisnPresentn/PrmpcSprvisnPresentnPage';
import U0024 from 'pages/usr/bm/pc/pr/prmpcSprvisnExmnt/PrmpcSprvisnExmntPage';
import U0025 from 'pages/usr/bm/ci/ci/cnslInsttAppn/CnslInsttAppnPage';
import U0026 from 'pages/usr/bm/aw/wr/wctReqst/WctReqstPage';
import U0027 from 'pages/usr/bm/tr/tr/taskDetailSport/TaskDetailSportPage';
import U0028 from 'pages/usr/bm/aw/ac/agremChangeList/AgremChangeListPage';
import U0029 from 'pages/usr/bm/rs/sa/sprvisorAppnList/SprvisorAppnListPage';
import U0030 from 'pages/usr/bm/rs/sr/sprvisnResultList/SprvisnResultListPage';

import U0100 from 'pages/usr/bm/aw/lc/levelConfirmation/LevelCnfrmnListPage';
import U0101 from 'pages/usr/bm/aw/ai/actualResultConfirmation/AcmsltCnfrmnListPage';
import U0102 from 'pages/usr/bm/aw/lp/levelPresentation/LevelCnfrmnPresentnPage';

import U0103 from 'pages/usr/bm/rs/rr/reportPresentation/ReprtPresentnListPage';
import U0104 from 'pages/usr/bm/rs/re/reportExamination/ReprtExmntListPage';

import U0105 from 'pages/usr/bm/rs/sr/supervisionChange/SprvisnChangeListPage';

function App() {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Main />} />
      <Route
        exact
        path={'/biz/agrem/agremChgDtlAply'}
        render={() => <AgremChgDtlAplyPage />}
      />
      <Route
        exact
        path={'/biz/evl/evlRsltReg'}
        render={() => <EvlRsltRegPage />}
      />
      <Route exact path={'/sample'} render={() => <SamplePage />} />
      <Route
        exact
        path={'/cm/tr/cmAplyAsmtWhol'}
        render={() => <CmAplyAsmtWhol />}
      />
      <Route
        exact
        path={'/mg/bm/bm/bm/bsnsSeManage'}
        render={() => <M0000 />}
      />
      <Route
        exact
        path={'/mg/bm/bm/bc/bsnsBudgetManage'}
        render={() => <M0003 />}
      />
      <Route
        exact
        path={'/mg/bm/bm/bc/bsnsExpitmTaxitm'}
        render={() => <M0004 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pa/pblancManage'}
        render={() => <M0005 />}
      />
      <Route exact path={'/mg/bm/pm/pa/pblancUpdt'} render={() => <M0007 />} />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancChartrManage'}
        render={() => <M0008 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancPartcptnTrget'}
        render={() => <M0009 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancPvltrtAddpnt'}
        render={() => <M0010 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancRstrctCnd'}
        render={() => <M0011 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancFxManage'}
        render={() => <M0012 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancJobProcss'}
        render={() => <M0013 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancFormatDfn'}
        render={() => <M0014 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancRsltIx'}
        render={() => <M0016 />}
      />
      <Route
        exact
        path={'/mg/bm/pm/pc/pblancAditIem'}
        render={() => <M0017 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/se/suplyEntrprsInqire'}
        render={() => <M0018 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/se/suplyEntrprsPopup'}
        render={() => <M0019 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/se/suplyEntrprsBass'}
        render={() => <M0020 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/se/suplyEntrprsInfo'}
        render={() => <M0021 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/se/suplyEntrprsPrtn'}
        render={() => <M0022 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/se/evlOpinionPopup'}
        render={() => <M0023 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/se/suplyEntrprsAcmslt'}
        render={() => <M0024 />}
      />
      <Route
        exact
        path={'/mg/bm/mm/sm/suplyEntrprsMtchg'}
        render={() => <M0025 />}
      />
      <Route exact path={'/mg/bm/mm/sm/excelDwld'} render={() => <M0027 />} />
      <Route
        exact
        path={'/mg/bm/mm/ss/suplyMtchgStats'}
        render={() => <M0028 />}
      />
      <Route
        exact
        path={'/mg/bm/im/ir/insttRcritManage'}
        render={() => <M0035 />}
      />
      <Route
        exact
        path={'/mg/bm/im/ir/insttRcritRegist'}
        render={() => <M0036 />}
      />
      <Route
        exact
        path={'/mg/bm/im/ip/insttRcritProgrs'}
        render={() => <M0038 />}
      />
      <Route
        exact
        path={'/mg/bm/im/se/insttSlctnEvl'}
        render={() => <M0039 />}
      />
      <Route
        exact
        path={'/mg/bm/im/se/insttRegistPopup'}
        render={() => <M0040 />}
      />
      <Route
        exact
        path={'/mg/bm/im/se/insttAsignPopup'}
        render={() => <M0041 />}
      />
      <Route
        exact
        path={'/mg/bm/im/sr/insttResultRegist'}
        render={() => <M0042 />}
      />
      <Route
        exact
        path={'/mg/bm/im/sr/insttResultPopup'}
        render={() => <M0043 />}
      />
      <Route
        exact
        path={'/mg/bm/im/sr/insttCmitPopup'}
        render={() => <M0044 />}
      />
      <Route
        exact
        path={'/mg/bm/ia/ia/insttAgremExmnt'}
        render={() => <M0045 />}
      />
      <Route
        exact
        path={'/mg/bm/ia/ic/insttAgremCncls'}
        render={() => <M0047 />}
      />
      <Route
        exact
        path={'/mg/bm/di/di/docIssuSttus'}
        render={() => <M0050 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/tr/taskRceptSttus'}
        render={() => <M0052 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/tr/excBsnsDetail'}
        render={() => <M0053 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/bm/bsnsManageInqire'}
        render={() => <M0067 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/pr/propseRequstInqire'}
        render={() => <M0079 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/pr/propseRequstDetail'}
        render={() => <M0080 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/pi/propseInqire'}
        render={() => <M0081 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/bt/bsnsTaskSttus'}
        render={() => <M0083 />}
      />
      <Route
        exact
        path={'/mg/tr/tr/tp/taskProgrsSttus'}
        render={() => <M0085 />}
      />
      <Route exact path={'/mg/tr/re/re/rqisitExmnt'} render={() => <M0087 />} />
      <Route
        exact
        path={'/mg/tr/re/re/excBsnsDetail'}
        render={() => <M0088 />}
      />
      <Route
        exact
        path={'/mg/tr/re/ie/indcSportSttus'}
        render={() => <M0101 />}
      />
      <Route exact path={'/mg/tr/se/se/sptEvlPlan'} render={() => <M0102 />} />
      <Route
        exact
        path={'/mg/tr/se/sr/sptEvlRegist'}
        render={() => <M0114 />}
      />
      <Route exact path={'/mg/tr/te/ec/techEvlCmit'} render={() => <M0118 />} />
      <Route
        exact
        path={'/mg/tr/te/er/techResultRegist'}
        render={() => <M0127 />}
      />
      <Route
        exact
        path={'/mg/tr/te/te/techResultNtce'}
        render={() => <M0135 />}
      />
      <Route
        exact
        path={'/mg/tr/te/te/techResultDetail'}
        render={() => <M0136 />}
      />
      <Route
        exact
        path={'/mg/tr/sc/sc/sptCnfirmFoundng'}
        render={() => <M0137 />}
      />
      <Route
        exact
        path={'/mg/tr/sc/sr/sptResultRegist'}
        render={() => <M0149 />}
      />
      <Route
        exact
        path={'/mg/tr/sc/sr/sptExmntPopup'}
        render={() => <M0151 />}
      />
      <Route
        exact
        path={'/mg/tr/cc/pc/prmpcInsttAppn'}
        render={() => <M0153 />}
      />
      <Route
        exact
        path={'/mg/tr/cc/pe/prmpcCalcExmnt'}
        render={() => <M0155 />}
      />
      <Route
        exact
        path={'/mg/tr/cc/ps/prmpcSprvisnExmnt'}
        render={() => <M0160 />}
      />
      <Route
        exact
        path={'/mg/tr/cc/ps/presentnSttus'}
        render={() => <M0161 />}
      />
      <Route
        exact
        path={'/mg/tr/sc/dc/dlbrtMtrRegist'}
        render={() => <M0164 />}
      />
      <Route
        exact
        path={'/mg/tr/sc/dr/dlbrtResultRegist'}
        render={() => <M0170 />}
      />
      <Route
        exact
        path={'/mg/am/ci/ci/cnfirmInsttList'}
        render={() => <M0175 />}
      />
      <Route
        exact
        path={'/mg/am/am/ap/agremPlanList'}
        render={() => <M0179 />}
      />
      <Route
        exact
        path={'/mg/am/am/ac/agremCnclsList'}
        render={() => <M0181 />}
      />
      <Route
        exact
        path={'/mg/am/am/ac/agremCnclsDetail'}
        render={() => <M0182 />}
      />
      <Route
        exact
        path={'/mg/am/am/am/agremChangeList'}
        render={() => <M0187 />}
      />
      <Route
        exact
        path={'/mg/am/am/am/agremChangeRcept'}
        render={() => <M0188 />}
      />
      <Route
        exact
        path={'/mg/am/am/am/agremChangeConfm'}
        render={() => <M0189 />}
      />
      <Route
        exact
        path={'/mg/am/wr/rp/reprtPresentnList'}
        render={() => <M0191 />}
      />
      <Route
        exact
        path={'/mg/am/wr/rp/reprtPresentnDetail'}
        render={() => <M0192 />}
      />
      <Route
        exact
        path={'/mg/am/wr/rr/reprtRceptList'}
        render={() => <M0193 />}
      />
      <Route
        exact
        path={'/mg/am/wr/rr/reprtRceptDetail'}
        render={() => <M0194 />}
      />
      <Route
        exact
        path={'/mg/am/wr/wr/wctReqstList'}
        render={() => <M0195 />}
      />
      <Route
        exact
        path={'/mg/am/wr/wr/wctReqstDetail'}
        render={() => <M0196 />}
      />
      <Route
        exact
        path={'/mg/am/wr/wc/wctPymntList'}
        render={() => <M0198 />}
      />
      <Route exact path={'/mg/am/wr/rc/rcmsDtaList'} render={() => <M0200 />} />
      <Route
        exact
        path={'/mg/rm/mc/rp/reprtPresentnList'}
        render={() => <M0207 />}
      />
      <Route
        exact
        path={'/mg/rm/mc/rr/reprtRceptList'}
        render={() => <M0209 />}
      />
      <Route
        exact
        path={'/mg/rm/lc/rp/reprtPresentnList'}
        render={() => <M0227 />}
      />
      <Route
        exact
        path={'/mg/rm/lc/rr/reprtRceptList'}
        render={() => <M0229 />}
      />
      <Route
        exact
        path={'/mg/rm/lc/sr/sprvisnResultList'}
        render={() => <SprvisnResultListPage />}
      />
      <Route
        exact
        path={'/mg/sm/em/em/evlRegistBass'}
        render={() => <M0432 />}
      />
      <Route
        exact
        path={'/mg/sm/em/em/evlRegistComposition'}
        render={() => <M0433 />}
      />
      <Route exact path={'/mg/sm/em/em/evlTableEx'} render={() => <M0434 />} />
      <Route exact path={'/mg/sm/em/em/evlUpdtBass'} render={() => <M0435 />} />
      <Route
        exact
        path={'/mg/sm/em/em/evlUpdtComposition'}
        render={() => <M0436 />}
      />
      <Route exact path={'/mg/sm/em/em/evlIxInqire'} render={() => <M0437 />} />
      <Route
        exact
        path={'/mg/sm/em/em/ixAswperInqire'}
        render={() => <M0438 />}
      />
      <Route
        exact
        path={'/mg/sm/em/em/upperQesitmInqire'}
        render={() => <M0439 />}
      />
      <Route
        exact
        path={'/mg/bm/im/ie/insttRcritExmnt'}
        render={() => <M0450 />}
      />
      <Route
        exact
        path={'/mg/em/le/rp/reprtPresentnList'}
        render={() => <M0440 />}
      />
      <Route
        exact
        path={'/mg/em/le/rr/reprtRceptList'}
        render={() => <M0441 />}
      />
      <Route
        exact
        path={'/mg/em/or/or/objcReqstRcept'}
        render={() => <M0442 />}
      />
      <Route
        exact
        path={'/mg/em/or/op/objcProcessSttus'}
        render={() => <M0443 />}
      />
      <Route
        exact
        path={'/mg/rm/ed/ed/excDiaryCnstnt'}
        render={() => <M0451 />}
      />
      <Route
        exact
        path={'/mg/rm/ed/ca/anytmChckDgnss'}
        render={() => <M0452 />}
      />
      <Route exact path={'/mg/rs/rm/rm/rsltIxList'} render={() => <M0444 />} />
      <Route
        exact
        path={'/smg/sm/em/em/evlIxManage'}
        render={() => <M0801 />}
      />
      <Route exact path={'/usr/my/em/eo/evlOprtn'} render={() => <U0001 />} />
      <Route
        exact
        path={'/usr/my/em/er/evlResultRegist'}
        render={() => <U0002 />}
      />
      <Route
        exact
        path={'/usr/my/em/cr/chckResultRegist'}
        render={() => <U0003 />}
      />
      <Route exact path={'/usr/my/em/em/evlMfcmmFx'} render={() => <U0004 />} />
      <Route
        exact
        path={'/usr/my/em/ep/evlPartcptnRegist'}
        render={() => <U0005 />}
      />
      <Route exact path={'/usr/bm/tr/tr/smsDspth'} render={() => <U0006 />} />
      <Route
        exact
        path={'/usr/bm/tr/tr/taskReqstDetail'}
        render={() => <U0007 />}
      />
      <Route exact path={'/usr/bm/or/or/objcReqst'} render={() => <U0008 />} />
      <Route exact path={'/usr/bg/ba/ma/bsnsPblanc'} render={() => <U0009 />} />
      <Route
        exact
        path={'/usr/bm/cr/cr/chckResultInqire'}
        render={() => <U0010 />}
      />

      <Route
        exact
        path={'/usr/bm/ie/ie/indcEntrprsSearch'}
        render={() => <U0011 />}
      />
      <Route
        exact
        path={'/usr/bm/ie/im/indcEntrprsManage'}
        render={() => <U0012 />}
      />
      <Route
        exact
        path={'/usr/bm/ie/ir/indcMtchgResult'}
        render={() => <U0013 />}
      />
      <Route
        exact
        path={'/usr/bm/ie/br/bsnsActplnRequst'}
        render={() => <U0014 />}
      />
      <Route
        exact
        path={'/usr/bm/ie/pm/prpslManage'}
        render={() => <U0015 />}
      />
      <Route
        exact
        path={'/usr/bm/ie/ps/propseSttus'}
        render={() => <U0016 />}
      />
      <Route
        exact
        path={'/usr/bm/sm/se/suplyEntrprsSearch'}
        render={() => <U0017 />}
      />
      <Route
        exact
        path={'/usr/bm/sm/sm/suplyEntrprsManage'}
        render={() => <U0018 />}
      />
      <Route
        exact
        path={'/usr/bm/sm/sr/suplyEntrprsMtchg'}
        render={() => <U0019 />}
      />
      <Route
        exact
        path={'/usr/bm/sm/ba/bsnsActplnExmnt'}
        render={() => <U0020 />}
      />

      <Route
        exact
        path={'/usr/bm/pc/pc/prmpcCalcPresentn'}
        render={() => <U0021 />}
      />
      <Route
        exact
        path={'/usr/bm/pc/pe/prmpcCalcExmnt'}
        render={() => <U0022 />}
      />
      <Route
        exact
        path={'/usr/bm/pc/ps/prmpcSprvisnPresentn'}
        render={() => <U0023 />}
      />
      <Route
        exact
        path={'/usr/bm/pc/pr/prmpcSprvisnExmnt'}
        render={() => <U0024 />}
      />
      <Route
        exact
        path={'/usr/bm/ci/ci/cnslInsttAppn'}
        render={() => <U0025 />}
      />
      <Route exact path={'/usr/bm/aw/wr/wctReqst'} render={() => <U0026 />} />
      <Route
        exact
        path={'/usr/bm/tr/tr/taskDetailSport'}
        render={() => <U0027 />}
      />
      <Route
        exact
        path={'/usr/bm/aw/ac/agremChangeList'}
        render={() => <U0028 />}
      />
      <Route
        exact
        path={'/usr/bm/rs/sa/sprvisorAppnList'}
        render={() => <U0029 />}
      />
      <Route
        exact
        path={'/usr/bm/rs/sr/sprvisnResultList'}
        render={() => <U0030 />}
      />
      <Route
        exact
        path={'/usr/bm/aw/lc/levelConfirmation'}
        render={() => <U0100 />}
      />
      <Route
        exact
        path={'/usr/bm/aw/al/actualResultConfirmation'}
        render={() => <U0101 />}
      />
      <Route
        exact
        path={'/usr/bm/aw/lp/levelPresentation'}
        render={() => <U0102 />}
      />
      <Route
        exact
        path={'/usr/bm/rs/rr/reportPresentation'}
        render={() => <U0103 />}
      />
      <Route
        exact
        path={'/usr/bm/rs/re/reportExamination'}
        render={() => <U0104 />}
      />
      <Route
        exact
        path={'/usr/bm/rs/sr/supervisionResult'}
        render={() => <U0105 />}
      />

      <Route
        exact
        path={'/usr/bm/aw/ac/agremChangeList'}
        render={() => <U0028 />}
      />
      <Route exact path={'*'} component={Error} />
    </Switch>
  );
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log(
  'process.env.REACT_APP_EGOV_CONTEXT_URL',
  process.env.REACT_APP_EGOV_CONTEXT_URL
);

export default App;
