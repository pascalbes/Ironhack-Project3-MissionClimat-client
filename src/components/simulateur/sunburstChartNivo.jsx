import React from 'react'
import { Sunburst } from 'nivo'

const sunburstChartNivo = () => {

    const data ={
        "name": "nivo",
        "color": "hsl(226, 70%, 50%)",
        "children": [
          {
            "name": "viz",
            "color": "hsl(356, 70%, 50%)",
            "children": [
              {
                "name": "stack",
                "color": "hsl(357, 70%, 50%)",
                "children": [
                  {
                    "name": "chart",
                    "color": "hsl(278, 70%, 50%)",
                    "loc": 187250
                  },
                  {
                    "name": "xAxis",
                    "color": "hsl(263, 70%, 50%)",
                    "loc": 145774
                  },
                  {
                    "name": "yAxis",
                    "color": "hsl(118, 70%, 50%)",
                    "loc": 69113
                  },
                  {
                    "name": "layers",
                    "color": "hsl(189, 70%, 50%)",
                    "loc": 49890
                  }
                ]
              },
              {
                "name": "pie",
                "color": "hsl(265, 70%, 50%)",
                "children": [
                  {
                    "name": "chart",
                    "color": "hsl(297, 70%, 50%)",
                    "children": [
                      {
                        "name": "pie",
                        "color": "hsl(276, 70%, 50%)",
                        "children": [
                          {
                            "name": "outline",
                            "color": "hsl(203, 70%, 50%)",
                            "loc": 41384
                          },
                          {
                            "name": "slices",
                            "color": "hsl(90, 70%, 50%)",
                            "loc": 72203
                          },
                          {
                            "name": "bbox",
                            "color": "hsl(159, 70%, 50%)",
                            "loc": 165209
                          }
                        ]
                      },
                      {
                        "name": "donut",
                        "color": "hsl(145, 70%, 50%)",
                        "loc": 141652
                      },
                      {
                        "name": "gauge",
                        "color": "hsl(154, 70%, 50%)",
                        "loc": 194986
                      }
                    ]
                  },
                  {
                    "name": "legends",
                    "color": "hsl(139, 70%, 50%)",
                    "loc": 102046
                  }
                ]
              }
            ]
          },
          {
            "name": "colors",
            "color": "hsl(100, 70%, 50%)",
            "children": [
              {
                "name": "rgb",
                "color": "hsl(269, 70%, 50%)",
                "loc": 198295
              },
              {
                "name": "hsl",
                "color": "hsl(194, 70%, 50%)",
                "loc": 198914
              }
            ]
          },
          {
            "name": "utils",
            "color": "hsl(318, 70%, 50%)",
            "children": [
              {
                "name": "randomize",
                "color": "hsl(157, 70%, 50%)",
                "loc": 174244
              },
              {
                "name": "resetClock",
                "color": "hsl(256, 70%, 50%)",
                "loc": 89452
              },
              {
                "name": "noop",
                "color": "hsl(210, 70%, 50%)",
                "loc": 154547
              },
              {
                "name": "tick",
                "color": "hsl(121, 70%, 50%)",
                "loc": 137546
              },
              {
                "name": "forceGC",
                "color": "hsl(105, 70%, 50%)",
                "loc": 131565
              },
              {
                "name": "stackTrace",
                "color": "hsl(238, 70%, 50%)",
                "loc": 162247
              },
              {
                "name": "dbg",
                "color": "hsl(220, 70%, 50%)",
                "loc": 110081
              }
            ]
          },
          {
            "name": "generators",
            "color": "hsl(215, 70%, 50%)",
            "children": [
              {
                "name": "address",
                "color": "hsl(149, 70%, 50%)",
                "loc": 199548
              },
              {
                "name": "city",
                "color": "hsl(205, 70%, 50%)",
                "loc": 55726
              },
              {
                "name": "animal",
                "color": "hsl(29, 70%, 50%)",
                "loc": 57535
              },
              {
                "name": "movie",
                "color": "hsl(231, 70%, 50%)",
                "loc": 83334
              },
              {
                "name": "user",
                "color": "hsl(293, 70%, 50%)",
                "loc": 119732
              }
            ]
          },
          {
            "name": "set",
            "color": "hsl(151, 70%, 50%)",
            "children": [
              {
                "name": "clone",
                "color": "hsl(307, 70%, 50%)",
                "loc": 66326
              },
              {
                "name": "intersect",
                "color": "hsl(45, 70%, 50%)",
                "loc": 31280
              },
              {
                "name": "merge",
                "color": "hsl(164, 70%, 50%)",
                "loc": 66429
              },
              {
                "name": "reverse",
                "color": "hsl(302, 70%, 50%)",
                "loc": 119451
              },
              {
                "name": "toArray",
                "color": "hsl(266, 70%, 50%)",
                "loc": 95448
              },
              {
                "name": "toObject",
                "color": "hsl(289, 70%, 50%)",
                "loc": 163386
              },
              {
                "name": "fromCSV",
                "color": "hsl(54, 70%, 50%)",
                "loc": 48854
              },
              {
                "name": "slice",
                "color": "hsl(160, 70%, 50%)",
                "loc": 135469
              },
              {
                "name": "append",
                "color": "hsl(245, 70%, 50%)",
                "loc": 56281
              },
              {
                "name": "prepend",
                "color": "hsl(290, 70%, 50%)",
                "loc": 56401
              },
              {
                "name": "shuffle",
                "color": "hsl(323, 70%, 50%)",
                "loc": 198120
              },
              {
                "name": "pick",
                "color": "hsl(115, 70%, 50%)",
                "loc": 196613
              },
              {
                "name": "plouc",
                "color": "hsl(146, 70%, 50%)",
                "loc": 88851
              }
            ]
          },
          {
            "name": "text",
            "color": "hsl(324, 70%, 50%)",
            "children": [
              {
                "name": "trim",
                "color": "hsl(283, 70%, 50%)",
                "loc": 40524
              },
              {
                "name": "slugify",
                "color": "hsl(337, 70%, 50%)",
                "loc": 183118
              },
              {
                "name": "snakeCase",
                "color": "hsl(295, 70%, 50%)",
                "loc": 124239
              },
              {
                "name": "camelCase",
                "color": "hsl(268, 70%, 50%)",
                "loc": 102411
              },
              {
                "name": "repeat",
                "color": "hsl(68, 70%, 50%)",
                "loc": 17787
              },
              {
                "name": "padLeft",
                "color": "hsl(253, 70%, 50%)",
                "loc": 127802
              },
              {
                "name": "padRight",
                "color": "hsl(337, 70%, 50%)",
                "loc": 19013
              },
              {
                "name": "sanitize",
                "color": "hsl(165, 70%, 50%)",
                "loc": 194268
              },
              {
                "name": "ploucify",
                "color": "hsl(48, 70%, 50%)",
                "loc": 92189
              }
            ]
          },
          {
            "name": "misc",
            "color": "hsl(109, 70%, 50%)",
            "children": [
              {
                "name": "whatever",
                "color": "hsl(98, 70%, 50%)",
                "children": [
                  {
                    "name": "hey",
                    "color": "hsl(103, 70%, 50%)",
                    "loc": 60637
                  },
                  {
                    "name": "WTF",
                    "color": "hsl(286, 70%, 50%)",
                    "loc": 102570
                  },
                  {
                    "name": "lol",
                    "color": "hsl(65, 70%, 50%)",
                    "loc": 9355
                  },
                  {
                    "name": "IMHO",
                    "color": "hsl(249, 70%, 50%)",
                    "loc": 98111
                  }
                ]
              },
              {
                "name": "other",
                "color": "hsl(34, 70%, 50%)",
                "loc": 163919
              },
              {
                "name": "crap",
                "color": "hsl(149, 70%, 50%)",
                "children": [
                  {
                    "name": "crapA",
                    "color": "hsl(260, 70%, 50%)",
                    "loc": 89672
                  },
                  {
                    "name": "crapB",
                    "color": "hsl(195, 70%, 50%)",
                    "children": [
                      {
                        "name": "crapB1",
                        "color": "hsl(68, 70%, 50%)",
                        "loc": 33894
                      },
                      {
                        "name": "crapB2",
                        "color": "hsl(351, 70%, 50%)",
                        "loc": 169399
                      },
                      {
                        "name": "crapB3",
                        "color": "hsl(74, 70%, 50%)",
                        "loc": 4109
                      },
                      {
                        "name": "crapB4",
                        "color": "hsl(295, 70%, 50%)",
                        "loc": 154259
                      }
                    ]
                  },
                  {
                    "name": "crapC",
                    "color": "hsl(202, 70%, 50%)",
                    "children": [
                      {
                        "name": "crapC1",
                        "color": "hsl(82, 70%, 50%)",
                        "loc": 15505
                      },
                      {
                        "name": "crapC2",
                        "color": "hsl(178, 70%, 50%)",
                        "loc": 124564
                      },
                      {
                        "name": "crapC3",
                        "color": "hsl(352, 70%, 50%)",
                        "loc": 101732
                      },
                      {
                        "name": "crapC4",
                        "color": "hsl(145, 70%, 50%)",
                        "loc": 85131
                      },
                      {
                        "name": "crapC5",
                        "color": "hsl(104, 70%, 50%)",
                        "loc": 42416
                      },
                      {
                        "name": "crapC6",
                        "color": "hsl(122, 70%, 50%)",
                        "loc": 125698
                      },
                      {
                        "name": "crapC7",
                        "color": "hsl(342, 70%, 50%)",
                        "loc": 152688
                      },
                      {
                        "name": "crapC8",
                        "color": "hsl(77, 70%, 50%)",
                        "loc": 55193
                      },
                      {
                        "name": "crapC9",
                        "color": "hsl(33, 70%, 50%)",
                        "loc": 125905
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }

    return (
        <div>
             <Sunburst
        height={400}
        width={400}
        data={data}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="loc"
        cornerRadius={2}
        borderWidth={1}
        borderColor="white"
        // colors={{ scheme: 'purple_red' }}
        // childColor={{ theme: 'labels.text.fill' }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
    />
        </div>
    )
}

export default sunburstChartNivo
