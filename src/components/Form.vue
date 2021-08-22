<template>
    <form class="form" @scroll="handleScroll">
        <div class="form__block">
            <label class="form__label" for="name">Наименование товара</label>
            <div class="form__marker form__marker_active"></div>
        </div>
        <input class="form__input" id="name" type="text" placeholder="Введите наименование товара" required>

        <div class="form__block">
            <label class="form__label" for="description">Описание товара</label>
        </div>
        <textarea class="form__input form__area" id="description" type="text" placeholder="Введите описание товара"></textarea>

        <div class="form__block">
            <label class="form__label" for="url">Ссылка на изображение товара</label>
            <div class="form__marker form__marker_active"></div>
        </div>
        <input class="form__input" id="url" type="url" placeholder="Введите ссылку" required>

        <div class="form__block">
            <label class="form__label" for="price">Цена товара</label>
            <div class="form__marker form__marker_active"></div>
        </div>
        <input class="form__input" id="price" type="number" placeholder="Введите цену" required>

        <input class="form__submit" type="submit" value="Добавить товар">
    </form>
</template>

<script>




</script>