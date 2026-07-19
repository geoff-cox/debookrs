// === "Which Method?" Interactive Flowchart ===
// Clickable decision tree for choosing a first-order solution method.
// The student answers the highlighted question with the Yes / No buttons
// and the chart walks them to the appropriate tool:
//   first order? -> already a derivative? -> separable? -> linear? -> which tool
// Companion to the "Which Method Applies" drills in the Integrating Factor chapter.
(function () {
	const boardId = 'method-flowchart';

	// Colors
	const QUESTION_FILL = '#f7f7f7';
	const METHOD_FILL = '#eef4fb';
	const ACTIVE_FILL = '#fff3c4';   // question waiting on an answer
	const DONE_FILL = '#c9e7cd';     // method the path ends on
	const EDGE_IDLE = '#b0b0b0';
	const EDGE_TAKEN = '#2e7d32';
	const BORDER_IDLE = '#888888';
	const BORDER_ACTIVE = '#b28900';
	const BORDER_DONE = '#2e7d32';

	const board = JXG.JSXGraph.initBoard(boardId + '-plot1', {
		boundingbox: [0, 12.2, 16, 0],
		axis: false,
		showCopyright: false,
		showNavigation: false,
		pan: { enabled: false },
		zoom: { enabled: false },
	});

	const baseText = 'font-family: sans-serif; text-align: center; line-height: 1.25;';

	// --- node factory: centered box (polygon) + html text ---
	function makeNode(cx, cy, w, h, html, kind) {
		const half = { x: w / 2, y: h / 2 };
		const box = board.create('polygon', [
			[cx - half.x, cy - half.y], [cx + half.x, cy - half.y],
			[cx + half.x, cy + half.y], [cx - half.x, cy + half.y],
		], {
			fillColor: kind === 'question' ? QUESTION_FILL : METHOD_FILL,
			fillOpacity: 1,
			highlight: false,
			hasInnerPoints: false,
			vertices: { visible: false, fixed: true },
			borders: { strokeColor: BORDER_IDLE, strokeWidth: 1.5, highlight: false, fixed: true },
			fixed: true,
		});
		const label = board.create('text', [cx, cy, html], {
			anchorX: 'middle',
			anchorY: 'middle',
			fixed: true,
			highlight: false,
			cssStyle: baseText + ' font-size: 13px;',
		});
		return { box, label, cx, cy, w, h, kind };
	}

	function setNodeState(node, state) {
		// state: 'idle' | 'active' | 'done'
		const fill = state === 'active' ? ACTIVE_FILL
			: state === 'done' ? DONE_FILL
			: (node.kind === 'question' ? QUESTION_FILL : METHOD_FILL);
		const stroke = state === 'active' ? BORDER_ACTIVE
			: state === 'done' ? BORDER_DONE
			: BORDER_IDLE;
		node.box.setAttribute({ fillColor: fill });
		node.box.borders.forEach(b => b.setAttribute({
			strokeColor: stroke,
			strokeWidth: state === 'idle' ? 1.5 : 3,
		}));
	}

	// --- edge factory: arrow + yes/no tag ---
	function makeEdge(from, to, answer) {
		let p1, p2, tagPos;
		if (Math.abs(from.cx - to.cx) < 0.01) {
			// vertical drop
			p1 = [from.cx, from.cy - from.h / 2];
			p2 = [to.cx, to.cy + to.h / 2];
			tagPos = [from.cx + 0.45, (p1[1] + p2[1]) / 2];
		} else {
			// horizontal hop
			p1 = [from.cx + from.w / 2, from.cy];
			p2 = [to.cx - to.w / 2, to.cy];
			tagPos = [(p1[0] + p2[0]) / 2, from.cy + 0.38];
		}
		const arrow = board.create('arrow', [p1, p2], {
			strokeColor: EDGE_IDLE,
			strokeWidth: 2,
			fixed: true,
			highlight: false,
		});
		const tag = board.create('text', [tagPos[0], tagPos[1], answer], {
			anchorX: 'middle',
			anchorY: 'middle',
			fixed: true,
			highlight: false,
			cssStyle: baseText + ' font-size: 12px; font-style: italic; color: #666;',
		});
		return { arrow, tag };
	}

	function setEdgeState(edge, taken) {
		edge.arrow.setAttribute({
			strokeColor: taken ? EDGE_TAKEN : EDGE_IDLE,
			strokeWidth: taken ? 3.5 : 2,
		});
		edge.tag.setAttribute({
			cssStyle: baseText + ' font-size: 12px; font-style: italic; color: '
				+ (taken ? EDGE_TAKEN : '#666') + ';'
				+ (taken ? ' font-weight: bold;' : ''),
		});
	}

	// --- layout ---
	const qX = 4.6, mX = 11.8;
	const nodes = {
		start: makeNode(qX, 11.3, 6.4, 1.1,
			'<b>Start:</b> a differential equation to solve', 'question'),
		q1: makeNode(qX, 9.3, 6.4, 1.3,
			'Is the equation <b>first order</b>?<br>(highest derivative is y&prime;)', 'question'),
		mHigher: makeNode(mX, 9.3, 7.0, 1.3,
			'<b>Higher-order equation</b><br>new tools coming in later chapters', 'method'),
		q2: makeNode(qX, 7.1, 6.4, 1.3,
			'Is it <b>already a derivative</b>?<br>d&frasl;dx[ &hellip; ] = f(x)', 'question'),
		mDI: makeNode(mX, 7.1, 7.0, 1.3,
			'<b>Direct Integration</b><br>integrate both sides', 'method'),
		q3: makeNode(qX, 4.9, 6.4, 1.3,
			'Is it <b>separable</b>?<br>y&prime; = f(x)&middot;g(y)', 'question'),
		mSOV: makeNode(mX, 4.9, 7.0, 1.3,
			'<b>Separation of Variables</b><br>separate, then integrate', 'method'),
		q4: makeNode(qX, 2.7, 6.4, 1.3,
			'Is it <b>linear</b>?<br>y&prime; + P(x)y = Q(x)', 'question'),
		mIF: makeNode(mX, 2.7, 7.0, 1.3,
			'<b>Integrating Factor</b><br>multiply by &mu;(x) = e<sup>&int;P(x)dx</sup>', 'method'),
		mNone: makeNode(qX, 0.7, 8.6, 1.2,
			'<b>No formula method (yet)</b> &mdash; try qualitative or numerical tools', 'method'),
	};

	const edges = {
		startq1: makeEdge(nodes.start, nodes.q1, ''),
		q1no: makeEdge(nodes.q1, nodes.mHigher, 'no'),
		q1yes: makeEdge(nodes.q1, nodes.q2, 'yes'),
		q2yes: makeEdge(nodes.q2, nodes.mDI, 'yes'),
		q2no: makeEdge(nodes.q2, nodes.q3, 'no'),
		q3yes: makeEdge(nodes.q3, nodes.mSOV, 'yes'),
		q3no: makeEdge(nodes.q3, nodes.q4, 'no'),
		q4yes: makeEdge(nodes.q4, nodes.mIF, 'yes'),
		q4no: makeEdge(nodes.q4, nodes.mNone, 'no'),
	};

	// --- decision logic ---
	const flow = {
		q1: { yes: { node: 'q2', edge: 'q1yes' }, no: { node: 'mHigher', edge: 'q1no' } },
		q2: { yes: { node: 'mDI', edge: 'q2yes' }, no: { node: 'q3', edge: 'q2no' } },
		q3: { yes: { node: 'mSOV', edge: 'q3yes' }, no: { node: 'q4', edge: 'q3no' } },
		q4: { yes: { node: 'mIF', edge: 'q4yes' }, no: { node: 'mNone', edge: 'q4no' } },
	};

	let current = 'q1';

	function reset() {
		Object.values(nodes).forEach(n => setNodeState(n, 'idle'));
		Object.values(edges).forEach(e => setEdgeState(e, false));
		setEdgeState(edges.startq1, true);
		current = 'q1';
		setNodeState(nodes.q1, 'active');
		board.update();
	}

	function answer(ans) {
		if (!flow[current]) { return; } // already at a terminal node
		const step = flow[current][ans];
		const nextKey = step.node;
		setEdgeState(edges[step.edge], true);
		setNodeState(nodes[current], 'idle');
		if (flow[nextKey]) {
			setNodeState(nodes[nextKey], 'active');
		} else {
			setNodeState(nodes[nextKey], 'done');
		}
		current = nextKey;
		board.update();
	}

	// --- buttons ---
	function makeButton(cx, cy, w, h, textStr, fill, handler) {
		const half = { x: w / 2, y: h / 2 };
		const btn = board.create('polygon', [
			[cx - half.x, cy - half.y], [cx + half.x, cy - half.y],
			[cx + half.x, cy + half.y], [cx - half.x, cy + half.y],
		], {
			fillColor: fill,
			fillOpacity: 1,
			highlight: false,
			vertices: { visible: false, fixed: true },
			borders: { strokeColor: '#555555', strokeWidth: 1.5, highlight: false, fixed: true },
			fixed: true,
		});
		const lbl = board.create('text', [cx, cy, '<b>' + textStr + '</b>'], {
			anchorX: 'middle',
			anchorY: 'middle',
			fixed: true,
			highlight: false,
			cssStyle: baseText + ' font-size: 13px; cursor: pointer;',
		});
		btn.on('down', handler);
		lbl.on('down', handler);
		return btn;
	}

	makeButton(12.2, 11.55, 1.7, 0.9, 'Yes', '#c9e7cd', () => answer('yes'));
	makeButton(14.2, 11.55, 1.7, 0.9, 'No', '#f6cfcf', () => answer('no'));
	makeButton(13.2, 10.35, 2.2, 0.8, 'Reset', '#e2e2e2', reset);

	board.create('text', [13.2, 0.7,
		'If an equation is <i>both</i> separable and linear,<br>either tool works &mdash; pick the faster one.'], {
		anchorX: 'middle',
		anchorY: 'middle',
		fixed: true,
		highlight: false,
		cssStyle: baseText + ' font-size: 11.5px; color: #666;',
	});

	reset();
})();
