document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.top__filter');
	const tabsBtn = document.querySelectorAll('.top__link');
	const tabsContent = document.querySelectorAll('.product');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('top__link')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('top__link--active')}
        );
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('top__link--active');
				tabsHandler(tabsPath);
			}
		});
	}


	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('top__content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('top__content--active');
	};
});
