<template>
  <main-layout>
    <div class="container">
      <h1 class="blue-title">Последние анкеты</h1>
      <transition-group class="cards" name="card" tag="div" appear>
        <div
          class="card"
          v-for="card in cards"
          :key="card.id"
          @click="goToDetails(card.id)"
        >
          <div class="card-content">
            <img :src="card.images[0].url" :alt="card.name" />
          </div>
          <div class="card-info">
            <div class="card-info-body">
              <h3 class="card-title">
                <span> {{ card.name }} </span>
                {{ card.age }} {{ getCorrectTextAge(card.age) }}
              </h3>
              <div class="card-actions">
                <button @click.stop="dislikeCard(card.id)" class="button">
                  <img src="../assets/dislike.svg" alt="dislike" />
                </button>
                <button
                  @click.stop="() => console.log('message')"
                  class="button"
                >
                  <img src="../assets/message.svg" alt="message" />
                </button>
              </div>
            </div>
            <p>{{ card.country }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </main-layout>
</template>

<script>
import { useRouter } from "vue-router";
import { MainLayout } from "../components/layout";
import { ref } from "vue";
export default {
  components: { MainLayout },
  setup() {
    const router = useRouter();
    const cards = ref([
      {
        id: 1,
        name: "Кристина",
        age: 33,
        country: "Россия",
        images: [
          {
            url: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
          },
        ],
      },
      {
        id: 2,
        name: "Василиса",
        age: 33,
        country: "Россия",
        images: [
          {
            url: "https://images.unsplash.com/photo-1578298245398-7130884db6f5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
          },
        ],
      },
      {
        id: 3,
        name: "Кристина",
        age: 33,
        country: "Россия",
        images: [
          {
            url: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
          },
        ],
      },
      {
        id: 4,
        name: "Василиса",
        age: 33,
        country: "Россия",
        images: [
          {
            url: "https://images.unsplash.com/photo-1578298245398-7130884db6f5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
          },
        ],
      },
      {
        id: 5,
        name: "Кристина",
        age: 30,
        country: "Россия",
        images: [
          {
            url: "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
          },
        ],
      },
      {
        id: 6,
        name: "Василиса",
        age: 29,
        country: "Россия",
        images: [
          {
            url: "https://images.unsplash.com/photo-1578298245398-7130884db6f5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            url: "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
          },
        ],
      },
    ]);

    const goToDetails = (id) => {
      router.push(`/card/${id}`);
    };

    const dislikeCard = (id) => {
      const cardIdx = cards.value.findIndex((card) => card.id === id);
      if (cardIdx !== -1) {
        cards.value.splice(cardIdx, 1);
      }
    };

    const getCorrectTextAge = (age) => {
      let form;
      let count = age % 100;
      if (count >= 5 && count <= 20) {
        form = "лет";
      } else {
        count = count % 10;
        if (count == 1) {
          form = "год";
        } else if (count >= 2 && count <= 4) {
          form = "года";
        } else {
          form = "лет";
        }
      }
      return form;
    };

    return { cards, goToDetails, getCorrectTextAge, dislikeCard };
  },
};
</script>

<style scoped>
.card-enter,
.card-leave-to {
  opacity: 0;
}

.card-enter {
  transform: translateY(30%);
}

.card-leave-to {
  transform: translateX(300%);
}

.card-leave-active {
  position: absolute;
}
.button {
  border: none;
  background: none;
}

.blue-title {
  color: #1b75bb;
}

.container {
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 20px;
  padding-bottom: 20px;
}

.cards {
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 20px;
  position: relative;
}

.card {
  transition: all 0.2s;
}

.card-content img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: lightgray;
}

.card-info {
  margin-top: 10px;
}

.card-info-body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.card-title span {
  color: #1b75bb;
  text-decoration: underline;
}

@media (max-width: 570px) {
  .cards {
    flex-direction: column;
  }

  .card {
    width: 100%;
  }

  .card img {
    height: auto;
  }
}
</style>
