/**
* accordionのような形で要素と要素の間に差し込まれる要素を扱うためのハンドラ
* toggleItemでScaleを変化させることでも実現できるが、Scaleは高さだけでなく倍率も変えてしまうので、
* 開閉式でかつ要素と要素の間に差し込まれるものについては、アコーディオンとして切り出した
*/
export default class AccordionHandler {
	
	/**
	 * イベントを登録
	 */
	constructor() {
		this.registerElement();
		// アコーディオン要素は閉じる時は元の高さに戻る必要があるが、
		// 下手に分岐を入れるとコードが煩雑になってしまうので、CSSの高さを直接管理することとした
		this.ORIGIN_HEIGHT = {
			command: 40
		};
	}
	
	/**
	 * 要素の表示・非表示を切り替える
	 * trigger: 要素の表示・非表示を切り替えるためのトリガー ボタンを想定
	 * newButtonClass: 追加モードの場合に付与されるクラス　
	 * closeButtonClass: 終了モードの場合に付与されるクラス
	 * hideElement: 表示・非表示が切り替わる要素
	 * siblingElement: 表示・非表示が切り替わる要素と隣接する要素 追従して移動するためにtranslateYオプションを設定
	 *                 
	 */
	toggle(option) {
		
		option.trigger.classList.toggle(option.newButtonClass);
		option.trigger.classList.toggle(option.closeButtonClass);
		
		// アコーディオン要素の親がアコーディオン要素を内包できるよう高さを取得
		let hideElement = document.getElementById(option.hideElement);
		hideElement.classList.toggle('hidden-accordion');
		let hideElementHeight = hideElement.clientHeight;
		
		// clientHeightは実際の高さよりも1小さくなってしまうので、毎回1を足す
		let siblingElementHeight =
			document.getElementById(option.siblingElement).clientHeight + 1;
		
		// 閉じられるときはアコーディオン要素の親の高さを元に戻し、開くときは親の高さを増やす
		let scale = hideElementHeight === 0 ?
			(this.ORIGIN_HEIGHT.command) :
			(siblingElementHeight + hideElementHeight);

		document.getElementById(option.siblingElement)
			.style.height = scale + "px";
		
	}
	
	/**
	 * 各種イベントをリスナーに登録する
	 * ・メモ欄 div
	 */
	registerElement() {
	
		// メモ表示
		let commandListLength = document.getElementById('commandList')
			.children.length;
		
		// サブカテゴリ
		for (let i = 1; i <= commandListLength; i++ ) {
			
			let commandSubListLength = document.getElementById(`commandSubList-${i}`)
			.getElementsByTagName('li').length;
			
			// 各コマンドについて、メモ表示ボタンを配置する
			for (let j = 1; j <= commandSubListLength; j++) {
				
				document.getElementById(`memoOpener-${i}-${j}`)
					.addEventListener('click', ((event) => {
			
					let option = {
						trigger: event.target,
						newButtonClass: "angle-down",
						closeButtonClass: "angle-up",

						hideElement: `memo-${i}-${j}`,
						siblingElement: `commandSubList-${i}-Item-${j}`
					};

					this.toggle(option);
				}));
			}
			
		}
		
	}
	
}