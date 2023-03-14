// import React from "react";
// import { Model } from "survey-core";
// import { Survey } from "survey-react-ui";
// import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
// import "survey-core/survey.i18n.js";
// import "survey-creator-core/survey-creator-core.i18n.js";
// import "survey-core/defaultV2.css";
// import "survey-creator-core/survey-creator-core.css";
// // import "./index.css";

// function SurveyCreatorRenderComponent() {
//   const [optionsForm] = React.useState(createSurveyModel());
//   const [creator, setCreator] = React.useState(createCreator(true));
//   function createCreator(isFirst) {
//     const json = !isFirst ? creator.JSON : {};
//     const q = optionsForm.getQuestionByName("q");
//     const options = {};
//     q.choices.forEach((item) => (options[item.value] = q.isItemSelected(item)));
//     const res = new SurveyCreator(options);
//     res.JSON = json;
//     res.showSidebar = false;
//     return res;
//   }
//   function createSurveyModel() {
//     const model = new Model({
//       showNavigationButtons: "none",
//       width: "100%",
//       elements: [
//         {
//           type: "checkbox",
//           name: "q",
//           titleLocation: "hidden",
//           colCount: 4,
//           choices: [
//             { value: "showDesignerTab", text: "Show Designer Tab" },
//             { value: "showTestSurveyTab", text: "Show Preview Tab" },
//             { value: "showLogicTab", text: "Show Logic Tab" },
//             { value: "showTranslationTab", text: "Show Translation Tab" },
//             { value: "showJSONEditorTab", text: "Show JSON Editor Tab" },
//             { value: "showEmbeddedSurveyTab", text: "Show Embedded Tab" },
//           ],
//           defaultValue: [
//             "showDesignerTab",
//             "showTestSurveyTab",
//           ],
//         },
//       ],
//     });
//     model.onUpdatePageCssClasses.add((sender, options) => {
//       options.cssClasses.page.root += " optionsForm";
//     });
//     model.onValueChanged.add((sender, options) => {
//       setCreator(createCreator(false));
//     });
//     return model;
//   }
//   return (
//     <div className="creator_height">
//       {/* <Survey model={optionsForm} /> */}
//       <SurveyCreatorComponent creator={creator} />
//     </div>
//   );
// }

// export default SurveyCreatorRenderComponent;


import React from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";


function SurveyCreatorRenderComponent() {
  const options = {
    showLogicTab: true,
  };
  const creator = new SurveyCreator(options);
  creator.loadSurvey("d5220f76-4802-40cf-ad67-61d7e55608e5");
  return <SurveyCreatorComponent creator={creator} />;
}

export default SurveyCreatorRenderComponent;
