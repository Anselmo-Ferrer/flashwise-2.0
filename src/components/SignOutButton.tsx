'use client'

export default function SignOutButton() {
  async function handleSignOut() {
    await fetch('/auth/signout', { method: 'POST' })
    window.location.href = '/login'
  }

  return <button onClick={handleSignOut}>Sair</button>
}