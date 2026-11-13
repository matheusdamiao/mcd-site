import * as React from 'react';

type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

/**
 * Renders a JSON-LD structured data script. Safe to use from server components.
 */
export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type='application/ld+json'
      // JSON.stringify output is controlled by our own objects.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
