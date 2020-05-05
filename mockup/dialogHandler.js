import OverlayHandler from "./overlayHandler.js";

/**
 * ダイアログを扱うためのハンドラクラス
*/
export default class DialogHandler {
	
	/**
	 * ダイアログ要素はオーバーレイと一対一で結びついているので、
	 * オーバーレイ用のハンドラのインスタンスを保持する
	 */
	constructor() {
		this.activeElement = "";
		this.activeOverlay = "";
		
		this.overlayHandler = new OverlayHandler(this);
		
		this.registerHandler();
		this.registerListHandler();
		this.registerCloseHandler();
	}
	
	/**
	 * ダイアログ形式の要素の表示・非表示を切り替える
	 * trigger: 発火要素 メニューの場合、発火要素の横へ表示するために位置情報を利用
	 * overlay: ダイアログと結びつくオーバーレイ要素
	 * hideElement: 表示対象のHTML要素
	 * menu: メニュー形式のオブジェクトの場合、位置計算が必要となるので、フラグとして保持
	 */
	toggleDialog(option) {
		let overlayDOM = document.getElementById(option.overlay);
		let hideElement = document.getElementById(option.hideElement);
		
		overlayDOM.classList.toggle('hidden-modal');
		let isHidden = hideElement.classList.toggle('hidden-modal');
		
		// メニューが閉じられた場合は画面が初期状態に戻るので、以降の処理は必要ない
		if (isHidden) {
			this.activeElement = "";
			this.activeOverlay = "";
			
			return;
		}
		
		// メニューが開かれているとき、ダイアログが開かれると同時に対応したメニュー・メニュー用のオーバーレイを
		// 閉じる必要があるので、制御用変数として保持
		this.activeElement = option.hideElement;
		this.activeOverlay = option.overlay;
		
		// ダイアログがメニュー形式の場合、呼び出し元のHTML要素横へ描画できるよう
		// event.targetオブジェクトをもとに位置を算出し、top, leftプロパティへ設定
		if (option.hasOwnProperty("menu")) {
			
			// メニューは下に表示してしまうと、下に見切れてしまうので、メニューのサイズの半分の高さ分
			// 上に配置することで見切れないようにする
			let hideElementCenterHeight = document.getElementById(option.hideElement)
				.clientHeight;
			
			document.getElementById(option.hideElement).style.top = option.trigger.getBoundingClientRect().top - hideElementCenterHeight + document.documentElement.scrollTop + "px";
		
			console.log(option.trigger.getBoundingClientRect().top);
			
			document.getElementById(option.hideElement).style.left = option.trigger.getBoundingClientRect().right + "px";
		}
		
	}
	
	/**
	 * ハンドライベントをリスナーに登録する
	 */
	registerHandler() {
		// カテゴリ編集ダイアログ
		document.getElementById('categoryEditButton').addEventListener('click', ((event) => {

			let option = this.getDialogOption(event);
			this.toggleDialog(option);

			let dialogOption = {
				trigger: "categoryEdit",
				overlay: "modalEditOverlay",
				hideElement: "categoryEditDialog",
			}
			this.toggleDialog(dialogOption);
		}));

		// コマンド編集ダイアログ
		document.getElementById('commandEditButton').addEventListener('click', ((event) => {

			let option = this.getDialogOption(event);
			this.toggleDialog(option);

			let dialogOption = {
				trigger: "commandEdit",
				overlay: "modalEditOverlay",
				hideElement: "commandEditDialog",
			}
			this.toggleDialog(dialogOption);
		}));
	}
	
	/**
	 * リスト形式で複数回登録が必要な要素のイベントを登録する
	 */
	registerListHandler() {
		
		//カテゴリ編集
		let categoryListLength = document.getElementById('categoryList')
			.getElementsByTagName('li').length;
		
		// 各カテゴリへ編集ボタンを配置
		for (let i = 1; i<= categoryListLength; i++) {
			document.getElementById(`categoryEdit-${i}`).addEventListener('click', ((event) => {
				let option = {
					trigger: event.target,
					overlay: "modalOverlay",
					hideElement: "categoryEditMenu",
					menu: true
				};

				this.toggleDialog(option);
			}));
		}
		
		
		//コマンド編集
		let commandListLength = document.getElementById('commandList')
			.children.length;

		// サブカテゴリ
		for (let i = 1; i <= commandListLength; i++ ) {
			
			let commandSubListLength = document.getElementById(`commandSubList-${i}`)
			.getElementsByTagName('li').length;
			
			// 各コマンドについて、編集ボタンを配置
			for (let j = 1; j <= commandSubListLength; j++) {
				
				document.getElementById(`commanSubList-${i}-Edit-${j}`).addEventListener('click', ((event) => {
				let option = {
					trigger: event.target,
					overlay: "modalOverlay",
					hideElement: "commandEditMenu",
					menu: true
				};

				this.toggleDialog(option);
				}));
				
			}
			
		}
		
	}
	
	/**
	 * ダイアログを閉じるイベントを登録する
	 */
	registerCloseHandler() {
		
		document.getElementById('categoryCloseButton').addEventListener('click', ((event) => {
			let option = this.getDialogOption(event);
			this.toggleDialog(option);
		}));
		document.getElementById('commandCloseButton').addEventListener('click', ((event) => {
			let option = this.getDialogOption(event);
			this.toggleDialog(option);
		}));
		
		document.getElementById('closeCategoryDialogButton').addEventListener('click', ((event) => {
			let option = this.getDialogOption(event);
			this.toggleDialog(option);
		}));
		document.getElementById('closeCommandDialogButton').addEventListener('click', ((event) => {
			let option = this.getDialogOption(event);
			this.toggleDialog(option);
		}));
		
	}
	
	/**
	 * ダイアログ用のオプションを取得する
	 * @param   {object} event トリガー
	 * @returns {object} options
	 */
	getDialogOption(event) {
		return {
			trigger: event.target,
			overlay: this.activeOverlay,

			hideElement: this.activeElement,
		}
	}
}