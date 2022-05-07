import { useEffect } from "react";

export default function Top10Graph() {
  useEffect(() => {
    window.Bokeh.embed.embed_item(data, "top10-graph");
  }, []);
  return <div className="bk-root" id="top10-graph"></div>;
}

const data = {
  target_id: null,
  root_id: "8479",
  doc: {
    defs: [],
    roots: {
      references: [
        {
          attributes: {
            text: "Top 10 CO2 emitting countries in 2020 with indication of global share of emissions",
          },
          id: "8480",
          type: "Title",
        },
        { attributes: {}, id: "8484", type: "DataRange1d" },
        { attributes: {}, id: "8500", type: "SaveTool" },
        { attributes: {}, id: "8525", type: "Selection" },
        { attributes: {}, id: "8520", type: "BasicTickFormatter" },
        {
          attributes: {
            active_multi: null,
            tools: [
              { id: "8497" },
              { id: "8498" },
              { id: "8499" },
              { id: "8500" },
              { id: "8501" },
              { id: "8502" },
            ],
          },
          id: "8504",
          type: "Toolbar",
        },
        { attributes: {}, id: "8486", type: "CategoricalScale" },
        { attributes: { source: { id: "8478" } }, id: "8517", type: "CDSView" },
        {
          attributes: { axis: { id: "8490" }, ticker: null },
          id: "8492",
          type: "Grid",
        },
        { attributes: {}, id: "8526", type: "UnionRenderers" },
        {
          attributes: {
            factors: [
              "China",
              "United States",
              "India",
              "Russia",
              "Japan",
              "Iran",
              "Germany",
              "Saudi Arabia",
              "South Korea",
              "Indonesia",
            ],
          },
          id: "8482",
          type: "FactorRange",
        },
        {
          attributes: {
            fill_alpha: { value: 0.1 },
            fill_color: { value: "#FABF25" },
            line_alpha: { value: 0.1 },
            line_color: { value: "#FABF25" },
            top: { field: "co2" },
            width: { value: 0.9 },
            x: { field: "country" },
          },
          id: "8515",
          type: "VBar",
        },
        { attributes: {}, id: "8488", type: "LinearScale" },
        { attributes: {}, id: "8497", type: "PanTool" },
        {
          attributes: { axis: { id: "8493" }, dimension: 1, ticker: null },
          id: "8496",
          type: "Grid",
        },
        {
          attributes: {
            fill_color: { value: "#FABF25" },
            line_color: { value: "#FABF25" },
            top: { field: "co2" },
            width: { value: 0.9 },
            x: { field: "country" },
          },
          id: "8514",
          type: "VBar",
        },
        { attributes: {}, id: "8501", type: "ResetTool" },
        { attributes: {}, id: "8523", type: "CategoricalTickFormatter" },
        {
          attributes: {
            below: [{ id: "8490" }],
            center: [{ id: "8492" }, { id: "8496" }, { id: "8511" }],
            height: 500,
            left: [{ id: "8493" }],
            renderers: [{ id: "8516" }],
            title: { id: "8480" },
            toolbar: { id: "8504" },
            width: 800,
            x_range: { id: "8482" },
            x_scale: { id: "8486" },
            y_range: { id: "8484" },
            y_scale: { id: "8488" },
          },
          id: "8479",
          subtype: "Figure",
          type: "Plot",
        },
        {
          attributes: { overlay: { id: "8503" } },
          id: "8499",
          type: "BoxZoomTool",
        },
        { attributes: {}, id: "8498", type: "WheelZoomTool" },
        {
          attributes: {
            axis_label: "Emissions in million tonnes",
            formatter: { id: "8520" },
            major_label_policy: { id: "8521" },
            ticker: { id: "8494" },
          },
          id: "8493",
          type: "LinearAxis",
        },
        { attributes: {}, id: "8494", type: "BasicTicker" },
        { attributes: {}, id: "8502", type: "HelpTool" },
        { attributes: {}, id: "8524", type: "AllLabels" },
        {
          attributes: {
            bottom_units: "screen",
            fill_alpha: 0.5,
            fill_color: "lightgrey",
            left_units: "screen",
            level: "overlay",
            line_alpha: 1.0,
            line_color: "black",
            line_dash: [4, 4],
            line_width: 2,
            right_units: "screen",
            syncable: false,
            top_units: "screen",
          },
          id: "8503",
          type: "BoxAnnotation",
        },
        { attributes: {}, id: "8491", type: "CategoricalTicker" },
        {
          attributes: {
            data_source: { id: "8478" },
            glyph: { id: "8514" },
            hover_glyph: null,
            muted_glyph: null,
            nonselection_glyph: { id: "8515" },
            view: { id: "8517" },
          },
          id: "8516",
          type: "GlyphRenderer",
        },
        {
          attributes: {
            data: {
              co2: {
                __ndarray__:
                  "x0s3ifHVxEA3iUFgxWiyQN0kBoGVE6NABoGVQ4ukmECamZmZGRuQQOF6FK5HSIdAFK5H4XoihEDy0k1iEIyDQKRwPQrXrIJAAAAAAABsgkA=",
                dtype: "float64",
                order: "little",
                shape: [10],
              },
              co2_per_capita: {
                __ndarray__:
                  "2c73U+OlHUBg5dAi23ksQOf7qfHSTfw/d76fGi+dJUDNzMzMzEwgQD0K16NwvSFAw/UoXI/CHkBkO99PjfcxQB1aZDvfTydAPQrXo3A9AUA=",
                dtype: "float64",
                order: "little",
                shape: [10],
              },
              country: [
                "China",
                "United States",
                "India",
                "Russia",
                "Japan",
                "Iran",
                "Germany",
                "Saudi Arabia",
                "South Korea",
                "Indonesia",
              ],
              index: [
                4723, 24661, 11277, 19597, 12336, 11595, 9619, 20269, 21590,
                11409,
              ],
              iso_code: [
                "CHN",
                "USA",
                "IND",
                "RUS",
                "JPN",
                "IRN",
                "DEU",
                "SAU",
                "KOR",
                "IDN",
              ],
              perc: [
                "30.6%",
                "13.5%",
                "7.0%",
                "4.5%",
                "3.0%",
                "2.1%",
                "1.9%",
                "1.8%",
                "1.7%",
                "1.7%",
              ],
              year: [
                2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020,
              ],
            },
            selected: { id: "8525" },
            selection_policy: { id: "8526" },
          },
          id: "8478",
          type: "ColumnDataSource",
        },
        {
          attributes: {
            level: "glyph",
            source: { id: "8478" },
            text: { field: "perc" },
            x: { field: "country" },
            x_offset: { value: -14 },
            y: { field: "co2" },
          },
          id: "8511",
          type: "LabelSet",
        },
        { attributes: {}, id: "8521", type: "AllLabels" },
        {
          attributes: {
            formatter: { id: "8523" },
            major_label_policy: { id: "8524" },
            ticker: { id: "8491" },
          },
          id: "8490",
          type: "CategoricalAxis",
        },
      ],
      root_ids: ["8479"],
    },
    title: "",
    version: "2.3.3",
  },
};
