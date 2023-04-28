<template>
    <div class="page interview" id="interview">
                    <interview>
                        <div required>
                            <label>
                                Ваши ФИО
                                <input type="text" placeholder="введите свои данные">
                            </label>
                        </div>
                        <div>
                            <input type="number" min="18" class="inputtype" placeholder="Ваш возраст">
                        </div>
                        <div>
                            <label><input type="radio" name="sex"> Мужской</label>
                            <label><input type="radio" name="sex" checked="checked">
                                Женский</label>
                        </div>
                        <div>
                            <div>
                                У вас уже есть мотоцикл?
                            </div>
                            <label><input type="checkbox" name="bike"> Да,есть </label>
                            <label><input type="checkbox" name="bike"> Мечтаю приобрести</label>
                        </div>
                        <div>
                            Какой цвет мотоциклов предпочитаете?<input type="color" name="color ">
                        </div>
                        <div>Предпочтительный вес мотоцикла?
                            <div>
                                <input id="radio_1" name="guruweba_example_radio" type="radio" value="1" />
                                <label for="radio_1">До 200 кг</label><br />
                                <input id="radio_2" name="guruweba_example_radio" type="radio" value="2" />
                                <label for="radio_2">Более 200 кг</label><br />
                            </div>
                        </div>
                        <div class="inputtext" required>Укажите Вашу страну:
                            <select class="inputtype">
                                <option>Украина</option>
                                <option>Литва</option>
                                <option>Латвия</option>
                                <option>Польша</option>
                                <option>Россия</option>
                                <option selected="selected">Беларусь</option>
                            </select>

                        </div>
                        <div>
                            <input type="submit" value="Отправить" />
                        </div>
                    </interview>
                </div>
</template>

<script>
export default {
	name: 'HomeComponent'
};
</script>

<style scoped>

</style>