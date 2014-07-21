/*jshint quotmark:double */
"use strict";

angular.module("layoutmodel")

.constant("LayoutModelTpl", " <script type=\"text/ng-template\" id=\"defaultTitle.html\">\r\n  <div>{{ innerTitle.CellLabels[labelidx] || innerTitle.CellLabels[0] }}</div>  \r\n </script>\r\n <script type=\"text/ng-template\" id=\"defaultData.html\">\r\n  <div class=\"value\"><span ng-bind-html=\"showValue(data)\"></span><span ng-if=\"checks\" class=\"validation\"><i ng-show=\"data.Valid == false\" class=\"fa fa-times invalid\"></i><i ng-show=\"data.Valid\" class=\"fa fa-check valid\"></i></span>           \r\n </script>\r\n <script type=\"text/ng-template\" id=\"defaultHeader.html\">\r\n  {{ header.CellLabels[labelidx] || header.CellLabels[0] }}           \r\n </script>\r\n \r\n<table ng-show=\"layoutModel && xHeaderGroups && xHeaderGroups.length > 0 && yHeaderGroups && yHeaderGroups.length>0\" class=\"rendering\" ng-class=\"class\">\r\n  <thead ng-show=\"headers.length >0\">\r\n    <tr class=\"constraints\" ng-repeat=\"header in headers\">\r\n      <td class=\"constraintlabel\" colspan=\"{{yHeaderGroups[0].length}}\">{{ header.label  }}</td>\r\n      <td class=\"constraintvalue\" colspan=\"{{data[0].length}}\">{{ header.value  }}</td>\r\n      <td class=\"closing-border\"></td>\r\n    </tr>\r\n    <tr class=\"space\">\r\n      <td colspan=\"{{yHeaderGroups[0].length}}\"></td>\r\n      <td colspan=\"{{data[0].length}}\"></td>\r\n      <td class=\"closing-border\"></td>\r\n    </tr>\r\n  </thead>\r\n  <tbody ng-if=\"constraints == true\" ng-show=\"hasConstraints()\">\r\n    <tr class=\"constraints\" ng-repeat=\"(constraint, value) in layoutModel.GlobalConstraintLabels\">\r\n      <td class=\"constraintlabel\" colspan=\"{{yHeaderGroups[0].length}}\">{{ value.DimensionLabels[labelidx] || value.DimensionLabels[0]  }}</td>\r\n      <td class=\"constraintvalue\" colspan=\"{{data[0].length}}\">{{ value.ValueLabels[labelidx] || value.ValueLabels[0]  }}</td>\r\n      <td class=\"closing-border\"></td>\r\n    </tr> \r\n    <tr class=\"space\">\r\n       <td colspan=\"{{yHeaderGroups[0].length}}\"></td>\r\n       <td colspan=\"{{data[0].length}}\"></td>\r\n       <td class=\"closing-border\"></td>\r\n     </tr> \r\n  </tbody> \r\n  <tbody>\r\n\t  <tr ng-repeat=\"headerGroup in xHeaderGroups\" ng-class=\"{ 'last-column-header-row' : $last, 'first-column-header-row' : $first }\">\r\n\t    <td class=\"header title\" ng-if=\"$index == 0\" colspan=\"{{yHeaderGroups[0].length}}\" rowspan=\"{{xHeaderGroups.length}}\" ng-include=\"titleTemplate\"></td>\r\n\t    <td class=\"header column-header\" ng-class=\"{ xrollup : header.RollUp }\" ng-click=\"headerclick({header : header, axis:'x' });\" ng-repeat=\"header in headerGroup\" colspan=\"{{header.CellSpan}}\" ng-include=\"headerTemplate\">    \r\n\t    </td>\r\n\t    <td class=\"closing-border\"></td>\r\n\t  </tr>\r\n\t  <tr ng-repeat=\"headerGroup in yHeaderGroups\" ng-class=\"headerclasses(headerGroup[headerGroup.length - 1], $first)\">\r\n\t    <td class=\"header row-header\" ng-class=\"headerclasses(header)\" ng-click=\"headerclick({header : header, axis:'y' });\" ng-repeat=\"header in headerGroup\" rowspan=\"{{header.CellSpan}}\" ng-include=\"headerTemplate\">     \r\n\t    </td>    \r\n\t    <td class=\"data\" ng-click=\"dataclick({ data : data })\" ng-class=\"classes(data, headerGroup[headerGroup.length - 1])\" ng-repeat=\"data in data[$index] track by $index\" ng-include=\"dataTemplate\">          \r\n\t    </td>\r\n\t    <td class=\"closing-border\"></td>\r\n\t  </tr>\r\n  </tbody>\r\n</table>\r\n</div>")

;