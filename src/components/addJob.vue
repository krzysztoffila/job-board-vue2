<template>
  <div id="add-job">
    <h2>Add a New Job Post</h2>
    <form>
      <label for="job-title">Job title:</label>
      <input v-model.lazy="job.title" type="text" id="job-title" required />
      <label for="job-content">Job Description:</label>
      <textarea
        v-model.lazy="job.content"
        name="job-content"
        id="job-content"
      ></textarea>
      <label for="job-tags">Tags:</label>
      <input v-model.lazy="job.tags" type="text" id="job-tags" required />
    </form>
    <div id="preview">
      <h3>Job Preview</h3>
      <p>Job title:{{ job.title }}</p>
      <p>Job Description:</p>
      <p>{{ job.content }}</p>
      <p>Tags:</p>
      <span v-for="(tag, index) in job.tags" :key="index">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: {
        title: "",
        content: "",
        tagInput: "",
        tags: [],
      },
    };
  },
  methods: {
    updateTags() {
      this.job.tags = this.job.tagInput
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
    },
  },
};
</script>
<style>
#add-job {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

#add-job:hover {
  transform: scale(1.02);
}

h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-weight: bold;
  color: #fff;
}

input[type="text"],
textarea {
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  transition: background 0.3s ease;
}

input[type="text"]:focus,
textarea:focus {
  background: rgba(255, 255, 255, 0.3);
  outline: none;
}

textarea {
  min-height: 150px;
}

#preview {
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h3 {
  margin-bottom: 10px;
  font-size: 20px;
  color: #00ccff;
}

p {
  color: #fff;
  font-size: 16px;
}

p:first-of-type {
  font-weight: bold;
}

@media (max-width: 768px) {
  #add-job {
    width: 80%;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  input[type="text"],
  textarea {
    font-size: 14px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  #add-job {
    width: 100%;
    padding: 15px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 16px;
  }

  input[type="text"],
  textarea {
    font-size: 12px;
    padding: 8px;
  }

  form {
    gap: 10px;
  }
}
</style>
