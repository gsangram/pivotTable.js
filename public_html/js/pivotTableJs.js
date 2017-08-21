$(document).ready(function(){
    
//      c1
//-------------------------------------------------------------------------->>    
       
//         $("#output").pivotUI(
//            [
//                {color: "blue", shape: "circle"},
//                {color: "red", shape: "triangle"}
//            ],
//            {
//                rows: ["color"],
//                cols: ["shape"]
//            }
//        );
  
//      c2
//------------------------------------------------------------------------->>    

//        var derivers = $.pivotUtilities.derivers;
//        $.getJSON("mps.json", function(mps) {
//            $("#output").pivotUI(mps, {
//                derivedAttributes: {
//                    "Age Bin": derivers.bin("Age", 10),
//                    "Gender Imbalance": function(mp) {
//                        return mp["Gender"] == "Male" ? 1 : -1;
//                    }
//                }
//            });
//        });


//      c3
// --------------------------------------------------------------->>
    
//$.getJSON("mps.json", function(mps) {
////    console.log("Vedanshu.......",mps);
//            $("#output").pivotUI(mps, {
//                rows: ["Province","Name"],
//                cols: ["Party"],
//                aggregatorName: "Integer Sum",
//                vals: ["Age"],
//                rendererName: "Heatmap",
//                rendererOptions: {
//                    table: {
//                        clickCallback: function(e, value, filters, pivotData){
//                            console.log("jooooo",e,value,filters,pivotData);
//                            var names = [];
//                            pivotData.forEachMatchingRecord(filters,
//                                function(record){ names.push(record.Name); });
//                            alert(names.join("\n"));
//                        }
//                    }
//
//                },
//
//            });
//
//        });


//      c4
//----------------------------------------------------------------------------->>
 
//$.getJSON("mps.json", function(mps) {
//            $("#output").pivotUI(mps, {
//                renderers: $.pivotUtilities.d3_renderers,
//                cols: [], rows: ["Province", "Party"],
//                rendererName: "Treemap"
//            });
//        });

//     c5
//------------------------------------------------------------------------------->>

//$.getJSON("mps.json", function(mps) {
////    console.log("Vedanshu.......",mps);
//            $("#output").pivotUI(mps, {
//                rows: ["Province","Name"],
//                cols: ["Party"],
//                aggregatorName: "Integer Sum",
//                vals: ["Age"],
//                rendererName: "Heatmap",
//                rendererOptions: {
//                    table: {
//                        clickCallback: function(e, value, filters, pivotData){
//                            console.log("jooooo",e,value,filters,pivotData);
//                            var names = [];
//                            pivotData.forEachMatchingRecord(filters,
//                                function(record){ names.push(record.Name); });
//                            alert(names.join("\n"));
//                        }
//                    }
//                },
//
//            });
//
//        });
//        
      
//    c6
//------------------------------------------------------------------------>>
       
//        var dateFormat =       $.pivotUtilities.derivers.dateFormat;
//        var sortAs =           $.pivotUtilities.sortAs;
//        var tpl =              $.pivotUtilities.aggregatorTemplates;
//        var fmt =              $.pivotUtilities.numberFormat({suffix: " °C"});
//
//        Papa.parse("mps.json", {
//            download: true,
//            skipEmptyLines: true,
//            complete: function(parsed){
//                $.getJSON("mps.json", function(mps) {
//                $("#bujji").pivotUI(mps, {
//                    hiddenAttributes: ["Date","Max Temp (C)","Mean Temp (C)",
//                        "Min Temp (C)" ,"Total Rain (mm)","Total Snow (cm)"],
//
//                    derivedAttributes: {
//                        "month name": dateFormat("Date", "%n", true),
//                        "day name":   dateFormat("Date", "%w", true)
//                    },
//
//                    rows: ["Name"],
//                    cols: ["Age"],
//
//                    sorters: {
//                        "month name": sortAs(["Jan","Feb","Mar","Apr", "May",
//                                "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),
//                        "day name": sortAs(["Mon","Tue","Wed", "Thu","Fri",
//                                "Sat","Sun"])
//                    },
//
//                    aggregators: {
//                        "Age of the person":
//                            function() { return tpl.average(fmt)(["Mean Temp (C)"])}                   
//                    },
//
//                aggregatorName: "Integer Sum",
//
//                    renderers: $.extend(
//                        $.pivotUtilities.renderers,
//                        $.pivotUtilities.c3_renderers,
//                        $.pivotUtilities.export_renderers
//                        ),
//
//                    rendererName: "Bar Chart",
//
//                    rendererOptions: {
//                        heatmap: {
//                            colorScaleGenerator: function(values) {
//                                return d3.scale.linear()
//                                    .domain([-35, 0, 35])
//                                    .range(["#77F", "#FFF", "#F77"])
//                            }
//                        }
//                    }
//                });
//            })
//        }
//    });

//     c7
//-------------------------------------------------------------------------------->>

//    var derivers = $.pivotUtilities.derivers;
//    var renderers = $.extend($.pivotUtilities.renderers, $.pivotUtilities.c3_renderers);
//            
//$.getJSON("mps.json", function(mps) {
//            $("#bujji").pivotUI(mps, {
//                renderers: renderers,
//                cols: ["Party"], rows: ["Province"],
//                rendererName: "Bar Chart",
//                rowOrder: "value_z_to_a", colOrder: "value_z_to_a",
//                rendererOptions: {
//                    c3: { data: {colors: {
//                        Liberal: '#dc3912', Conservative: '#3366cc', NDP: '#ff9900',
//                        Green:'#109618', 'Bloc Quebecois': '#990099'
//                    }}}
//                }
//            });
//        });

//      c8
//-------------------------------------------------------------------------------->>



var derivers = $.pivotUtilities.derivers;
        $.getJSON("mps.json", function(mps) {
            $("#bujji").pivotUI(mps, {
                derivedAttributes: {
                    "Age Bin": derivers.bin("Age", 10),
                    "Gender Imbalance": function(mp) {
                        console.log("laugh louder",mp);
                        return mp["Gender"] == "Male" ? "male" : "female";
                    }
                }
            });
        });

})