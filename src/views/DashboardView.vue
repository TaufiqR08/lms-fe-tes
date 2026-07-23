<template>
  <section>
    <p class="text-sm font-semibold text-indigo-600">Ringkasan</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight">Selamat datang!</h1>
    <p class="mt-2 text-slate-600">Pantau kegiatan belajar Anda dari satu tempat.</p>

    <div class="mt-8 grid gap-4 sm:grid-cols-3">
      <article v-for="item in [{ label: 'Kelas aktif', value: '0' }, { label: 'Tugas berjalan', value: '0' }, { label: 'Materi selesai', value: '0%' }]" :key="item.label" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p class="text-sm text-slate-500">{{ item.label }}</p>
        <p class="mt-2 text-2xl font-bold">{{ item.value }}</p>
      </article>
    </div>
  </section>
</template>
