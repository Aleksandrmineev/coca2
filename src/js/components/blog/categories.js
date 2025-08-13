/* eslint-disable prettier/prettier */
export function initBlogCategories(root = document) {
  const list = root.querySelector('.blog-categories__list');
  if (!list) return;

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.blog-categories__item');
    if (!btn) return;

    // toggle active
    const current = list.querySelector('.blog-categories__item.is-active');
    if (current) current.classList.remove('is-active');
    btn.classList.add('is-active');

    // событие на будущее (фильтрация/загрузка)
    list.dispatchEvent(
      new CustomEvent('categorychange', {
        bubbles: true,
        detail: { category: btn.dataset.category || 'all' },
      }),
    );
  });
}
