import { useState } from 'react'
import { Code2, Mail } from 'lucide-react'
import { Button } from '../../components/Button/Button'

const CONTACT_EMAIL = 'niloy.pro.aca@gmail.com'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Fill in every field before sending — I read all of these personally.')
      return
    }
    setError('')
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" aria-label="Contact" className="mx-auto max-w-2xl px-6 py-20">
      <h2 className="font-display text-3xl font-bold text-text-main">Get in touch</h2>
      <p className="mt-2 text-text-muted">
        Reach out directly, or send a message — it opens your mail client with everything
        filled in, nothing is stored on a server.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4" noValidate>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-text-main">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange('name')}
            className="rounded-lg border border-border-subtle bg-bg-surface px-3 py-2 text-text-main outline-none focus-visible:border-brand-primary"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-text-main">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            className="rounded-lg border border-border-subtle bg-bg-surface px-3 py-2 text-text-main outline-none focus-visible:border-brand-primary"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-text-main">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={handleChange('message')}
            className="rounded-lg border border-border-subtle bg-bg-surface px-3 py-2 text-text-main outline-none focus-visible:border-brand-primary"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-500">
            {error}
          </p>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button type="submit">
            <Mail size={16} aria-hidden="true" /> Send message
          </Button>
          <Button variant="ghost" href="https://github.com/nestorNiloy">
            <Code2 size={16} aria-hidden="true" /> GitHub
          </Button>
        </div>
      </form>
    </section>
  )
}
