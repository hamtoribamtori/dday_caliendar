// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    {"number" : 1, "message" : "경윤이의 사랑이 가득 담긴 편지♥"},
    {"number" : 2, "message" : "꽝 ! 아쉽지만 다음을 노리세요^O^"},
    {"number" : 3, "message" : "맛있는 음식 사먹을 기회!"},
    {"number" : 4, "message" : "따숩따숩한 커플 장갑~♥"},
    {"number" : 5, "message" : "♥따숩고 귀여운 커플 잠옷!♥"},
    {"number" : 6, "message" : "오빠가 좋아하는 유니폼브릿지의 맨투맨!"},
    {"number" : 7, "message" : "경윤이의 사랑이 가득 담긴 편지♥"},
    {"number" : 8, "message" : "맛있는 음식 사먹을 기회!"},
    {"number" : 9, "message" : "경윤이의 사랑이 가득 담긴 편지♥"},
    {"number" : 10, "message" : "맛있는 음식 사먹을 기회!"},
    {"number" : 11, "message" : "오빠가 좋아하는 유니폼브릿지의 맨투맨!"},
    {"number" : 12, "message" : "따숩따숩한 커플 장갑~♥"},
    {"number" : 13, "message" : "축하합니도! 당첨입니도! 오빠에게 가장 필요한 ★에어팟★"},
    {"number" : 14, "message" : "꽝 ! 아쉽지만 다음을 노리세요^O^"},
    {"number" : 15, "message" : "♥따숩고 귀여운 커플 잠옷!♥"},
    {"number" : 16, "message" : "꽝 ! 아쉽지만 다음을 노리세요^O^"},
    {"number" : 17, "message" : "따숩따숩한 커플 장갑~♥"},
    {"number" : 18, "message" : "맛있는 음식 사먹을 기회!"},
    {"number" : 19, "message" : "경윤이의 사랑이 가득 담긴 편지♥"},
    {"number" : 20, "message" : "오빠가 좋아하는 유니폼브릿지의 맨투맨!"},
    {"number" : 21, "message" :  "꽝 ! 아쉽지만 다음을 노리세요^O^"},
    {"number" : 22, "message" : "따숩따숩한 커플 장갑~♥"},
    {"number" : 23, "message" : "♥따숩고 귀여운 커플 잠옷!♥"},
    {"number" : 24, "message" : "맛있는 음식 사먹을 기회!"}
];
