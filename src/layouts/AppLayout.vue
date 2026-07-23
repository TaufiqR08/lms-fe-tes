<script setup lang="ts">
const navigation = [
  { label: 'Dashboard', to: '/dashboard', icon: '⌂' },
  { label: 'Kelas Saya', to: '/courses', icon: '▣' },
  { label: 'Tugas', to: '/assignments', icon: '✓' },
  { label: 'Profil', to: '/profile', icon: '◉' },
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 lg:flex">
    <aside class="border-b border-slate-200 bg-white lg:min-h-screen lg:w-64 lg:border-r lg:border-b-0">
      <div class="flex h-16 items-center px-6">
        <RouterLink to="/dashboard" class="text-lg font-bold tracking-tight text-indigo-700">
          Akademi LMS
        </RouterLink>
      </div>

      <nav class="flex gap-1 overflow-x-auto px-3 pb-3 lg:block lg:space-y-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          active-class="bg-indigo-50 text-indigo-700"
        >
          <span aria-hidden="true">{{ item.icon }}</span>
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>

    <div class="min-w-0 flex-1">
      <header class="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
        <p class="text-sm text-slate-500">Portal pembelajaran</p>
        <RouterLink to="/profile" class="rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-semibold text-indigo-700">
          Pengguna
        </RouterLink>
      </header>

      <main class="mx-auto max-w-7xl p-6 lg:p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
