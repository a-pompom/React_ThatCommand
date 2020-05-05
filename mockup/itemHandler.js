/**
* ダイアログに属さないtoggle要素を扱うためのクラス
*/
export default class ItemHandler {
	
	/**
	 * イベントを登録
	 */
	constructor() {
		this.registerElement();
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
	toggleItem(option) {
		
		option.trigger.classList.toggle(option.newButtonClass);
		option.trigger.classList.toggle(option.closeButtonClass);
		
		// 表示・非表示が切り替わったタイミングで隣接要素も追従できるよう、表示・非表示となる要素の高さを
		// 算出し、translateYプロパティの値に設定
		let hideElement = document.getElementById(option.hideElement);
		hideElement.classList.toggle('hidden-item');
		let hideElementHeight = hideElement.clientHeight;
	
		document.getElementById(option.siblingElement)
			.style.transform = "translateY(" + hideElementHeight + "px)";
	}
	
	/**
	 * 各種イベントをリスナーに登録する
	 * ・カテゴリ追加 input
	 * ・コマンド追加 input
	 * ・メモ欄 label
	 */
	registerElement() {
		// カテゴリ追加
		document.getElementById('newCategory').addEventListener('click', ((event) => {
			let option = {
				trigger: event.target,
				newButtonClass: "new-category",
				closeButtonClass: "close-category",

				hideElement: "categoryInput",
				siblingElement: "categoryList", // 要素が隠れる/出現するときに同時に移動する要素
			};
			
			this.toggleItem(option);

		}));
		// コマンド追加
		document.getElementById('newCommand').addEventListener('click', ((event) => {

			let option = {
				trigger: event.target,
				newButtonClass: "new-command",
				closeButtonClass: "close-command",

				hideElement: "commandInput",
				siblingElement: "commandList", // 要素が隠れる/出現するときに同時に移動する要素
			};
			
			this.toggleItem(option);	
		}));
		
	}
	
}