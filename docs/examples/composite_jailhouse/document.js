var jsonDocument =
  [
    {
      "type": "draw2d.shape.composite.Jailhouse",
      "id": "354fa3b9-a834-0221-2009-abc2d6bd8a",
      "x": 446,
      "y": 91,
      "width": 292,
      "height": 372,
      "userData": {},
      "cssClass": "draw2d_shape_composite_Jailhouse",
      "bgColor": "#F0F0F0",
      "color": "#333333",
      "stroke": 1,
      "alpha": 1,
      "radius": 2
    },
    {
      "type": "draw2d.shape.node.Start",
      "id": "354fa3b9-a834-0221-2009-a12bc2d6bd898952a",
      "x": 468,
      "y": 152,
      "width": 50,
      "height": 50,
      "userData": {},
      "cssClass": "draw2d_shape_node_Start",
      "composite": "354fa3b9-a834-0221-2009-abc2d6bd8a",

      "bgColor": "#4D90FE",
      "color": "#000000",
      "stroke": 1,
      "alpha": 1,
      "radius": 2
    },
    {
      "type": "draw2d.shape.node.End",
      "id": "ebfb35bb-5767-8155-c804-14bda7759",
      "x": 97,
      "y": 353,
      "width": 50,
      "height": 50,
      "userData": {},
      "cssClass": "draw2d_shape_node_End",
      "bgColor": "#4D90FE",
      "color": "#000000",
      "stroke": 1,
      "alpha": 1,
      "radius": 2
    },
    {
      "type": "draw2d.shape.node.End",
      "id": "ebfb35bb-5767-8155-c804-14bda7759dc2",
      "x": 597,
      "y": 353,
      "width": 50,
      "height": 50,
      "userData": {},
      "cssClass": "draw2d_shape_node_End",
      "composite": "354fa3b9-a834-0221-2009-abc2d6bd8a",
      "bgColor": "#4D90FE",
      "color": "#000000",
      "stroke": 1,
      "alpha": 1,
      "radius": 2
    },
    {
      "type": "draw2d.shape.node.Start",
      "id": "354fa3b9-a834-0221-2009-abc2d6bd852a",
      "x": 113,
      "y": 321,
      "width": 50,
      "height": 50,
      "userData": {},
      "cssClass": "draw2d_shape_node_Start",
      "bgColor": "#4D90FE",
      "color": "#000000",
      "stroke": 1,
      "alpha": 1,
      "radius": 2
    },
    {
      "type": "draw2d.shape.node.Start",
      "id": "354fa3b9-a834-0221-2009-abc2d6bd898952a",
      "x": 125,
      "y": 97,
      "width": 50,
      "height": 50,
      "userData": {},
      "cssClass": "draw2d_shape_node_Start",
      "bgColor": "#4D90FE",
      "color": "#000000",
      "stroke": 1,
      "alpha": 1,
      "radius": 2
    },
    {
      "type": "CollapsibleJailhouse",
      "id": "6b19ac35-562b-3902-9483-ec3b9e19",
      "x": 207,
      "y": 162,
      "width": 150,
      "height": 200,
      "alpha": 1,
      "userData": {},
      "ports": [],
    },
    {
      "type": "draw2d.Connection",
      "id": "74ce9e7e-5f0e-8642-6bec-4ff9c54b3f0a",
      "userData": {},
      "cssClass": "draw2d_Connection",
      "stroke": 1,
      "color": "#1B1B1B",
      "outlineStroke": 0,
      "outlineColor": "none",
      "policy": "draw2d.policy.line.LineSelectionFeedbackPolicy",
      "router": "draw2d.layout.connection.ManhattanConnectionRouter",
      "radius": 2,
      "source": {
        "node": "354fa3b9-a834-0221-2009-abc2d6bd852a",
        "port": "output0"
      },
      "target": {
        "node": "ebfb35bb-5767-8155-c804-14bda7759dc2",
        "port": "input0"
      }
    },
    {
      "type": "draw2d.Connection",
      "id": "ceea6415-f45c-2f62-30bc-61124c099ab8",
      "userData": {},
      "cssClass": "draw2d_Connection",
      "composite": "354fa3b9-a834-0221-2009-abc2d6bd8a",
      "stroke": 3,
      "color": "#129CE4",
      "outlineStroke": 1,
      "outlineColor": "#ffffff",
      "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
      "router": "draw2d.layout.connection.VertexRouter",
      "radius": 80,
      "vertex": [
        {
          "x": 518,
          "y": 177
        },
        {
          "x": 596,
          "y": 159
        },
        {
          "x": 485,
          "y": 326
        },
        {
          "x": 597,
          "y": 378
        }
      ],
      "source": {
        "node": "354fa3b9-a834-0221-2009-a12bc2d6bd898952a",
        "port": "output0"
      },
      "target": {
        "node": "ebfb35bb-5767-8155-c804-14bda7759dc2",
        "port": "input0"
      }
    }
  ]
;
