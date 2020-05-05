/**
 * オーバーレイを扱うためのハンドラクラス
*/
export default class OverlayHandler {
	
	/**
	 * 現在表示されている要素・オーバーレイの制御用変数を初期化
	 * @param {Object} dialogHandler オーバーレイに付随するダイアログハンドラ
	 */
	constructor(dialogHandler) {
		
		this.registerHandler(dialogHandler);
	}

	/**
	 * オーバーレイのクリックイベントをリスナーに登録する
	 * @param {Object} dialogHandler [[Description]]
	 */
	registerHandler(dialogHandler) {
		document.getElementById('modalOverlay').addEventListener('click', ((event) => {
			let option = dialogHandler.getDialogOption(event);
			
			dialogHandler.toggleDialog(option);
		}));
		
		document.getElementById('modalEditOverlay').addEventListener('click', ((event) => {
			let option = dialogHandler.getDialogOption(event);

			dialogHandler.toggleDialog(option);			
		}));
		
	}	
}