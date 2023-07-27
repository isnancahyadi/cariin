import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CommentSection = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const arrowBtn = document.querySelectorAll(".wrapper .ic");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const carouselChildrens = [...carousel.children];

    let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    arrowBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
      if (window.innerWidth < 800) return;
      timeoutId = setTimeout(
        () => (carousel.scrollLeft += firstCardWidth),
        2500
      );
    };

    autoPlay();

    const infiniteScroll = () => {
      if (carousel.scrollLeft === 4) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
  }, []);

  return (
    <div className="CommentSection">
      <div className="wrapper">
        <div id="left" className="ic">
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="xl"
            style={{ color: "white" }}
          />
        </div>
        <ul className="carousel">
          <li className="card">
            <div className="img">
              <img
                src="/assets/img/model-aykut-aktas.jpg"
                alt="comment"
                draggable="false"
              />
            </div>
            <h2>Aykut Aktas</h2>
            <span>Web Developer</span>
            <p className="cutoff-text text-center mt-4">
              Informasi yang disajikan cukup lengkap dan jelas, membantu saya
              memahami persyaratan dan tanggung jawab pekerjaan dengan baik
              sebelum melamar. Antarmuka yang user-friendly membuat saya cepat
              menavigasi situs ini tanpa kendala. Sungguh menjadi sumber daya
              yang berharga bagi para pencari kerja di bidang teknologi.
            </p>
          </li>
          <li className="card">
            <div className="img">
              <img
                src="/assets/img/model-ian-dooley.jpg"
                alt="comment"
                draggable="false"
              />
            </div>
            <h2>Ian Dooley</h2>
            <span>Web Developer</span>
            <p className="cutoff-text text-center mt-4">
              Terima kasih CariIn yang membantu saya menemukan pekerjaan impian
              di dunia IT. Tidak hanya memberikan daftar lowongan terbaru,
              tetapi juga memberikan insight berharga tentang tren industri,
              skill yang dibutuhkan, dan perusahaan yang sedang berkembang.
              Dengan dukungan dari platform ini, saya merasa lebih percaya diri
              dalam menghadapi proses wawancara dan seleksi, hingga akhirnya
              berhasil mendapatkan posisi yang saya idamkan.
            </p>
          </li>
          <li className="card">
            <div className="img">
              <img
                src="/assets/img/model-michael-dam.jpg"
                alt="comment"
                draggable="false"
              />
            </div>
            <h2>Michael Dam</h2>
            <span>Web Developer</span>
            <p className="cutoff-text text-center mt-4">
              Antarmuka yang responsif dan fitur pencarian yang akurat membuat
              mencari lowongan IT menjadi lebih efisien. Fitur filter yang
              lengkap memungkinkan saya menyaring pekerjaan berdasarkan lokasi
              dan spesialisasi yang diinginkan. Hasil pencarian yang relevan dan
              up-to-date menjadikan pengalaman menjelajahi CariIn ini
              menyenangkan dan menghemat waktu.
            </p>
          </li>
          <li className="card">
            <div className="img">
              <img
                src="/assets/img/model-pham-duy-quang.jpg"
                alt="comment"
                draggable="false"
              />
            </div>
            <h2>Pham Duy Quang</h2>
            <span>Web Developer</span>
            <p className="cutoff-text text-center mt-4">
              Saya suka bagaimana platform ini memudahkan pengunggahan resume
              dan portofolio, sangat membantu untuk menonjolkan kemampuan saya.
              Dengan portofolio visual yang bisa diunggah, saya dapat
              menampilkan proyek-proyek sebelumnya dan demonstrasi keterampilan
              teknis secara lebih komprehensif. Ini memberi saya kesempatan
              unggul untuk menarik perhatian perusahaan yang saya lamar.
            </p>
          </li>
          <li className="card">
            <div className="img">
              <img
                src="/assets/img/model-rayul.jpg"
                alt="comment"
                draggable="false"
              />
            </div>
            <h2>Rayul</h2>
            <span>Web Developer</span>
            <p className="cutoff-text text-center mt-4">
              CariIn memberikan akses ke banyak peluang menarik di industri
              teknologi. Saya terkesan dengan beragamnya pilihan lowongan dari
              perusahaan besar hingga startup yang menjanjikan. Tidak hanya
              pekerjaan tetap, tetapi juga ada peluang freelance dan proyek
              sementara yang cocok untuk para profesional yang ingin mencari
              tantangan baru.
            </p>
          </li>
          <li className="card">
            <div className="img">
              <img
                src="/assets/img/model-toby-christopher.jpg"
                alt="comment"
                draggable="false"
              />
            </div>
            <h2>Toby Christoper</h2>
            <span>Web Developer</span>
            <p className="cutoff-text text-center mt-4">
              Sebagai profesional IT, saya merasa terbantu dengan adanya
              notifikasi pekerjaan terbaru yang relevan dengan minat saya. Fitur
              notifikasi ini memastikan saya tetap mendapatkan informasi terkini
              tentang peluang kerja yang cocok dengan profil saya. Saya merasa
              didukung dan tidak ketinggalan kesempatan emas yang mungkin muncul
              sewaktu-waktu. Terima kasih atas layanan yang sangat membantu ini!
            </p>
          </li>
        </ul>
        <div id="right" className="ic">
          <FontAwesomeIcon
            icon={faAngleRight}
            size="xl"
            style={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
