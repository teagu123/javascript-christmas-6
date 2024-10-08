export const MESSAGE = {
	HELLO_START: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
	HELLO_RESULT: visitDate =>
		`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,

	HEAD_MENU: '<주문 메뉴>',
	HEAD_BEFORE_DISCOUNT: '\n<할인 전 총주문 금액>',

	ORDERED_MEUELIST: menu => `${menu.name} ${menu.count}개`,
}

export const ASK = {
	MENU_COUNT:
		'주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
	VISIT_DAY:
		'12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
}

export const ERROR = {
	VISIT_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
	ORDER_MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
}
